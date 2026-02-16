import { NextResponse } from "next/server";


function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listIdRaw = process.env.BREVO_LIST_ID;

    if (!apiKey || !listIdRaw) {
      return NextResponse.json({ ok: false, error: "missing_env" }, { status: 500 });
    }
    

    const listId = Number(listIdRaw);
    if (!Number.isFinite(listId)) {
      return NextResponse.json({ ok: false, error: "invalid_list_id" }, { status: 500 });
    }

    const res = await fetch(`https://api.brevo.com/v3/contacts/lists/${listId}/contacts/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
        "accept": "application/json",
      },
      body: JSON.stringify({
        emails: [email],
      }),
    });

    // 201 attendu en cas de succès
    if (res.ok) {
      return NextResponse.json({ ok: true });
    }

    // Si erreur, on remonte un message générique mais on log le détail côté serveur
    const detail = await res.text().catch(() => "");
    console.error("BREVO_WAITLIST_ERROR", res.status, detail);

    // Si le contact est déjà dans la liste, Brevo peut renvoyer une erreur selon le cas
    // On traite ça en succès pour éviter de bloquer l’UX
    if (res.status === 400 || res.status === 409) {
      return NextResponse.json({ ok: true, already: true });
    }

    return NextResponse.json({ ok: false, error: "brevo_error" }, { status: 502 });
  } catch (e) {
    console.error("WAITLIST_SERVER_ERROR", e);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
