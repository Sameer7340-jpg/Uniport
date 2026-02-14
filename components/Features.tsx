export default function Features() {
  return (
    <section id="features" className="py-16 text-center">
      <h3 className="text-3xl font-bold mb-10">Features</h3>
      <div className="grid md:grid-cols-3 gap-8 px-6">
        <div>
          <h4 className="font-semibold text-xl">WhatsApp Automation</h4>
          <p>Auto follow-ups that convert leads into clients.</p>
        </div>
        <div>
          <h4 className="font-semibold text-xl">Email Sequences</h4>
          <p>Smart email flows powered by AI.</p>
        </div>
        <div>
          <h4 className="font-semibold text-xl">DM Automation</h4>
          <p>Instagram & Facebook auto-responses.</p>
        </div>
      </div>
    </section>
  );
}
