// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { name, phone, service, details } = body;

//     const data = await resend.emails.send({
//       from: "Quotes <onboarding@resend.dev>",
//       to: ["shop-owner@example.com"],
//       subject: `New Quote Request: ${service} - ${name}`,
//       html: `
//         <h2>New Quote Request</h2>
//         <p><strong>Customer:</strong> ${name}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Requested Service:</strong> ${service}</p>
//         <p><strong>Details:</strong> ${details || "N/A"}</p>
//       `,
//     });

//     return NextResponse.json({ success: true, data });
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Failed to send request" },
//       { status: 500 },
//     );
//   }
// }
