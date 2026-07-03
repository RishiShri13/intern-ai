import Container from "@/components/common/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16">

      <Container>

        <div className="grid gap-12 md:grid-cols-4">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-black">
              Intern
              <span className="text-cyan-400">
                AI
              </span>
            </h2>

            <p className="mt-5 text-slate-400">
              AI Powered Internship Management Platform
            </p>

          </div>

          {/* Product */}

          <div>

            <h4 className="mb-4 font-semibold">
              Product
            </h4>

            <ul className="space-y-3 text-slate-400">

              <li>Features</li>
              <li>Pricing</li>
              <li>AI</li>
              <li>Analytics</li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h4 className="mb-4 font-semibold">
              Company
            </h4>

            <ul className="space-y-3 text-slate-400">

              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>

            </ul>

          </div>

          {/* Legal */}

          <div>

            <h4 className="mb-4 font-semibold">
              Legal
            </h4>

            <ul className="space-y-3 text-slate-400">

              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>

            </ul>

          </div>

        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-slate-500">

          © {new Date().getFullYear()} InternAI.
          All Rights Reserved.

        </div>

      </Container>

    </footer>
  );
}