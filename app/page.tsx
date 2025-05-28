import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";




export default function Home() {

  return (
    <main className="flex flex-col flex-1 scrollbar-hide">

      <Header />
      <Main />
      <Footer />

    </main>
  );
}
