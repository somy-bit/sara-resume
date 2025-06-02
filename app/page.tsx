import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";




export default function Home() {

  return (
    <main className="flex flex-col box-border max-w-screen">

      <Header />
      <Main />
      <Footer />

    </main>
  );
}
