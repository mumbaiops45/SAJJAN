"use client";

export default function TermsAndConditions() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="font-bold mb-6">
        Terms & Conditions – Sajjan
      </h1>

      <p className="mb-6 text-gray-300">
        Last Updated: {new Date().toLocaleDateString()}
      </p>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="font-semibold mb-3">1. Introduction</h2>
        <p className="text-gray-400 leading-relaxed">
          Welcome to Sajjan. These Terms & Conditions govern your access to 
          and use of our website, products, and services. By accessing or 
          using our services, you agree to be bound by these terms.
        </p>
      </section>

      {/* Use of Website */}
      <section className="mb-8">
        <h2 className="font-semibold mb-3">2. Use of Our Services</h2>
        <p className="text-gray-400 leading-relaxed">
          You agree to use Sajjan’s website and services only for lawful 
          purposes. You must not engage in any activity that may damage, 
          disrupt, or interfere with our operations or other users.
        </p>
      </section>

      {/* Intellectual Property */}
      <section className="mb-8">
        <h2 className="font-semibold mb-3">3. Intellectual Property</h2>
        <p className="text-gray-400 leading-relaxed">
          All content on this website, including text, images, logos, and 
          graphics, is the property of Sajjan and is protected by intellectual 
          property laws. Unauthorized reproduction or distribution is prohibited.
        </p>
      </section>

      {/* Payments (Optional if applicable) */}
      <section className="mb-8">
        <h2 className="font-semibold mb-3">4. Payments & Transactions</h2>
        <p className="text-gray-400 leading-relaxed">
          If applicable, all payments must be completed as per agreed terms. 
          Sajjan reserves the right to refuse or cancel any order or service 
          in case of incorrect pricing, suspected fraud, or policy violation.
        </p>
      </section>

      {/* Limitation of Liability */}
      <section className="mb-8">
        <h2 className="font-semibold mb-3">5. Limitation of Liability</h2>
        <p className="text-gray-400 leading-relaxed">
          Sajjan shall not be liable for any direct, indirect, incidental, 
          or consequential damages arising from the use of our website 
          or services.
        </p>
      </section>

      {/* Privacy */}
      <section className="mb-8">
        <h2 className="font-semibold mb-3">6. Privacy</h2>
        <p className="text-gray-400 leading-relaxed">
          Your use of our services is also governed by our Privacy Policy. 
          We are committed to protecting your personal information.
        </p>
      </section>

      {/* Termination */}
      <section className="mb-8">
        <h2 className="font-semibold mb-3">7. Termination</h2>
        <p className="text-gray-400 leading-relaxed">
          Sajjan reserves the right to suspend or terminate access to our 
          services at any time without prior notice if these terms are violated.
        </p>
      </section>

      {/* Changes */}
      <section className="mb-8">
        <h2 className="font-semibold mb-3">8. Changes to Terms</h2>
        <p className="text-gray-400 leading-relaxed">
          We may update these Terms & Conditions from time to time. Continued 
          use of our services after changes are posted constitutes acceptance 
          of the updated terms.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="font-semibold mb-3">9. Contact Us</h2>
        <p className="text-gray-400 leading-relaxed">
          If you have any questions regarding these Terms & Conditions, 
          please contact Sajjan through our official communication channels.
        </p>
      </section>
    </div>
  );
}