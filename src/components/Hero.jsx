import { useEffect, useRef } from "react"

function Hero() {
  const heroRef = useRef()

  let intervalId;

  useEffect(() => {
    intervalId = setInterval(() => {
      if (heroRef.current.classList.contains("hero")) {
        heroRef.current.classList.remove("hero")
        heroRef.current.classList.add("hero2")

      } else if (heroRef.current.classList.contains("hero2")) {
        heroRef.current.classList.remove("hero2")
        heroRef.current.classList.add("hero3")

      } else if (heroRef.current.classList.contains("hero3")) {
        heroRef.current.classList.remove("hero3")
         heroRef.current.classList.add("hero2")
      }

    }, 2000);

    return () => clearInterval(intervalId);
  }, [])

  return (
    <section className="bg-[url(/assets/images/original.png)] bg-no-repeat bg-cover min-h-screen">
      <div ref={heroRef} className="flex justify-end items-center hero">
        <div className="w-full md:w-1/2 px-4 text-base">
          Feeling good right now and am also coding right now in someone's shop but i don't feel comfortable where i am now, but i have no option than to stay here because there's no light at my house.
        </div>
      </div>
    </section>
  )
}

export default Hero