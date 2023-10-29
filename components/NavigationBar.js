import Link from "next/link";

const NavigationBar = () => {
  return (
    <nav className="bg-black text-white flex justify-center items-center gap-10 h-14 text-xl">
      <Link href="/crop-options">Produce Auctions</Link>
      <Link href="/profile">Profile</Link>
    </nav>
  );
};

export default NavigationBar;
