import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, phone, budget, requirement, message } = await req.json();

        if (!name || !email || !phone || !budget || !requirement || !message) {
            return new Response(JSON.stringify({ success: false, error: "Missing fields" }), { status: 400 });
        }

        // Create transporter for Gmail
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        // Email to YOU (Admin)
        const adminMailOptions = {
            from: `"Solar Space Contact" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            subject: `☀️ New Solar Inquiry - ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; background-color: #FDF9F3; padding: 20px; border-radius: 10px; max-width: 600px; margin: auto; border: 2px solid #C5A352;">
                    
                    <!-- Header -->
                    <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #3B0A4F 0%, #4A1560 100%); border-radius: 8px; margin-bottom: 20px;">
                        <h1 style="margin: 0; font-size: 32px; color: #C5A352;">
                            ☀️ Solar Space
                        </h1>
                        <p style="margin: 5px 0; color: #FFFFFF;">New Contact Form Submission</p>
                    </div>
                    
                    <!-- Inquiry Details -->
                    <div style="background-color: #FFFFFF; padding: 20px; border-radius: 8px; border: 1px solid #C5A352; margin-bottom: 15px;">
                        <h2 style="margin-top: 0; font-size: 22px; color: #3B0A4F; border-bottom: 2px solid #C5A352; padding-bottom: 10px;">
                            📋 Inquiry Details
                        </h2>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="border-bottom: 1px solid #F9F5EC;">
                                <td style="padding: 12px 0; font-weight: bold; color: #3B0A4F; width: 35%;">Name:</td>
                                <td style="padding: 12px 0; color: #555;">${name}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #F9F5EC;">
                                <td style="padding: 12px 0; font-weight: bold; color: #3B0A4F;">Email:</td>
                                <td style="padding: 12px 0; color: #555;">${email}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #F9F5EC;">
                                <td style="padding: 12px 0; font-weight: bold; color: #3B0A4F;">Phone:</td>
                                <td style="padding: 12px 0; color: #555;">${phone}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #F9F5EC;">
                                <td style="padding: 12px 0; font-weight: bold; color: #3B0A4F;">Budget:</td>
                                <td style="padding: 12px 0; color: #C5A352; font-weight: bold;">${budget}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #F9F5EC;">
                                <td style="padding: 12px 0; font-weight: bold; color: #3B0A4F;">Requirement:</td>
                                <td style="padding: 12px 0; color: #555;">${requirement}</td>
                            </tr>
                        </table>
                    </div>

                    <!-- Message Box -->
                    <div style="background-color: #FBF7EF; padding: 20px; border-radius: 8px; border-left: 4px solid #C5A352;">
                        <h3 style="margin-top: 0; font-size: 18px; color: #3B0A4F;">
                            💬 Message:
                        </h3>
                        <p style="color: #555; font-size: 15px; line-height: 1.6; margin: 0;">
                            ${message}
                        </p>
                    </div>

                    <!-- Footer -->
                    <div style="text-align: center; font-size: 12px; color: #888; margin-top: 25px; padding-top: 15px; border-top: 1px solid #C5A352;">
                        <p style="margin: 5px 0;">This inquiry was submitted via Solar Space contact form</p>
                        <p style="margin: 5px 0;">© ${new Date().getFullYear()} Solar Space. All Rights Reserved.</p>
                    </div>
                </div>
            `,
        };

        // Email to CLIENT (Confirmation)
        const clientMailOptions = {
            from: `"Solar Space" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: "✅ We've Received Your Solar Inquiry – Solar Space",
            html: `
                <div style="font-family: Arial, sans-serif; background-color: #FDF9F3; padding: 20px; border-radius: 10px; max-width: 600px; margin: auto; border: 2px solid #C5A352;">
                    
                    <!-- Header -->
                    <div style="text-align: center; padding: 25px; background: linear-gradient(135deg, #3B0A4F 0%, #4A1560 100%); border-radius: 8px; margin-bottom: 20px;">
                        <h1 style="margin: 0; font-size: 36px; color: #C5A352;">
                            ☀️ Solar Space
                        </h1>
                        <p style="margin: 10px 0 5px; color: #FFFFFF; font-size: 16px;">Powering Tomorrow with Clean Energy Today</p>
                        <p style="margin: 0; color: #C5A352; font-size: 14px;">🌱 Sustainable • Reliable • Innovative</p>
                    </div>
                    
                    <!-- Greeting -->
                    <h2 style="margin-top: 20px; font-size: 24px; color: #3B0A4F;">
                        Hello ${name},
                    </h2>
                    <p style="color: #555; font-size: 16px; line-height: 1.6;">
                        Thank you for your interest in <strong style="color: #C5A352;">Solar Space</strong>! 
                        We've successfully received your inquiry about solar solutions, and our expert team is excited to help you transition to clean, renewable energy.
                    </p>

                    <div style="background: linear-gradient(135deg, #C5A352 0%, #B89440 100%); padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
                        <p style="margin: 0; color: #FFFFFF; font-size: 15px;">
                            ⏰ Our team will contact you within <strong>24 hours</strong>
                        </p>
                    </div>

                    <!-- Submitted Details -->
                    <div style="background-color: #FFFFFF; padding: 20px; border-radius: 8px; border: 1px solid #C5A352; margin-top: 20px;">
                        <h3 style="margin-top: 0; font-size: 20px; color: #3B0A4F; border-bottom: 2px solid #C5A352; padding-bottom: 10px;">
                            📋 Your Inquiry Summary
                        </h3>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="border-bottom: 1px solid #F9F5EC;">
                                <td style="padding: 10px 0; font-weight: bold; color: #3B0A4F; width: 35%;">Name:</td>
                                <td style="padding: 10px 0; color: #555;">${name}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #F9F5EC;">
                                <td style="padding: 10px 0; font-weight: bold; color: #3B0A4F;">Email:</td>
                                <td style="padding: 10px 0; color: #555;">${email}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #F9F5EC;">
                                <td style="padding: 10px 0; font-weight: bold; color: #3B0A4F;">Phone:</td>
                                <td style="padding: 10px 0; color: #555;">${phone}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #F9F5EC;">
                                <td style="padding: 10px 0; font-weight: bold; color: #3B0A4F;">Budget:</td>
                                <td style="padding: 10px 0; color: #C5A352; font-weight: bold;">${budget}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #F9F5EC;">
                                <td style="padding: 10px 0; font-weight: bold; color: #3B0A4F;">Requirement:</td>
                                <td style="padding: 10px 0; color: #555;">${requirement}</td>
                            </tr>
                        </table>
                        
                        <div style="background-color: #FBF7EF; padding: 15px; border-radius: 6px; margin-top: 15px; border-left: 3px solid #C5A352;">
                            <p style="margin: 0; font-weight: bold; color: #3B0A4F; font-size: 14px;">Your Message:</p>
                            <p style="margin: 10px 0 0; color: #555; font-size: 14px; line-height: 1.5;">
                                ${message}
                            </p>
                        </div>
                    </div>

                    <!-- What's Next -->
                    <div style="background-color: #FBF7EF; padding: 20px; border-radius: 8px; margin-top: 20px;">
                        <h3 style="margin-top: 0; font-size: 18px; color: #3B0A4F;">
                            🔆 What Happens Next?
                        </h3>
                        <ol style="color: #555; font-size: 14px; line-height: 1.8; padding-left: 20px;">
                            <li>Our solar experts will review your requirements</li>
                            <li>We'll prepare a customized solar solution for you</li>
                            <li>You'll receive a detailed proposal with pricing</li>
                            <li>We'll schedule a consultation at your convenience</li>
                        </ol>
                    </div>

                    <!-- Benefits Highlight -->
                    <div style="background: linear-gradient(135deg, #3B0A4F 0%, #4A1560 100%); padding: 20px; border-radius: 8px; margin-top: 20px; text-align: center;">
                        <h3 style="margin: 0 0 15px; font-size: 20px; color: #C5A352;">
                            Why Choose Solar Space?
                        </h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; text-align: left;">
                            <div style="color: #FFFFFF; font-size: 13px;">✓ Expert Installation</div>
                            <div style="color: #FFFFFF; font-size: 13px;">✓ Premium Products</div>
                            <div style="color: #FFFFFF; font-size: 13px;">✓ Government Subsidies</div>
                            <div style="color: #FFFFFF; font-size: 13px;">✓ 25+ Year Warranty</div>
                            <div style="color: #FFFFFF; font-size: 13px;">✓ Net Metering Support</div>
                            <div style="color: #FFFFFF; font-size: 13px;">✓ End-to-End Service</div>
                        </div>
                    </div>

                    <!-- Closing -->
                    <p style="color: #555; font-size: 15px; margin-top: 25px; line-height: 1.6;">
                        We're committed to providing you with the best solar solutions that maximize your savings and contribute to a greener planet. Our team is here to answer any questions you may have.
                    </p>

                    <p style="margin-top: 20px; font-size: 15px; color: #555;">
                        Best Regards,<br>
                        <strong style="color: #3B0A4F;">The Solar Space Team</strong><br>
                        <span style="color: #C5A352;">Empowering Your Sustainable Future</span>
                    </p>
                    
                    <!-- Footer -->
                    <div style="text-align: center; font-size: 12px; color: #888; margin-top: 30px; padding-top: 20px; border-top: 2px solid #C5A352;">
                        <p style="margin: 5px 0; color: #3B0A4F; font-weight: bold;">☀️ Solar Space</p>
                        <p style="margin: 5px 0;">Email: ${process.env.GMAIL_USER} | Phone: +91-XXXXXXXXXX</p>
                        <p style="margin: 5px 0;">🌐 www.solarspace.com</p>
                        <p style="margin: 15px 0 5px; color: #666;">© ${new Date().getFullYear()} Solar Space. All Rights Reserved.</p>
                        <p style="margin: 0; color: #999; font-size: 11px;">🌱 This email is powered by renewable energy</p>
                    </div>
                </div>
            `,
        };

        // Send both emails in parallel
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(clientMailOptions)
        ]);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error("Email sending error:", error);
        return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
}