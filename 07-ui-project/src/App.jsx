import Header from "./components/Header"
import Section1 from "./components/section-left/Section1"
import Section2 from "./components/section-right/Section2"


const App = () => {
  return (
    <div className='min-h-screen flex flex-col gap-10 px-20 py-15 box-border'>
      <Header />

      <main className='flex flex-1 gap-4'>
        <Section1 />
        <section className="flex flex-1 gap-10">
          <Section2/>
        </section>
      </main>
    </div>
  )
}

export default App