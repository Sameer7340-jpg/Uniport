export default function Pricing() {
  return (
    <section id="pricing" className="py-16 text-center">
      <h3 className="text-3xl font-bold mb-10">Pricing</h3>
      <div className="grid md:grid-cols-3 gap-8 px-6">
        <div className="border p-6 rounded-xl">
          <h4 className="text-xl font-bold">Starter</h4>
          <p className="text-2xl my-4">$0</p>
          <p>Basic automation</p>
        </div>
        <div className="border p-6 rounded-xl">
          <h4 className="text-xl font-bold">Pro</h4>
          <p className="text-2xl my-4">$29</p>
          <p>Full automation suite</p>
        </div>
        <div className="border p-6 rounded-xl">
          <h4 className="text-xl font-bold">Agency</h4>
          <p className="text-2xl my-4">$99</p>
          <p>Unlimited clients</p>
        </div>
      </div>
    </section>
  );
}
