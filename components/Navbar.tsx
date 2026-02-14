export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <h1 className="text-2xl font-bold">UniPort</h1>
      <div className="space-x-6">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}
