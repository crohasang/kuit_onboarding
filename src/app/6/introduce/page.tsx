'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Page() {
  const lettersRef = useRef<Array<HTMLSpanElement | null>>([])
  const iLineRef = useRef<HTMLDivElement | null>(null)
  const textContainerRef = useRef<HTMLDivElement | null>(null)
  const mainRef = useRef<HTMLElement | null>(null)

  const textStyle = {
    fontSize: 'clamp(48px, 9vw, 120px)',
    lineHeight: 1.2,
  }

  useEffect(() => {
    const letterTargets = lettersRef.current.filter(el => el !== null)
    const iLineTarget = iLineRef.current
    const introTl = gsap.timeline()
    gsap.set(letterTargets, { autoAlpha: 0, y: 10 })
    gsap.set(iLineTarget, { autoAlpha: 1, scaleY: 0, transformOrigin: 'top center' })
    introTl
      .to(letterTargets, {
        autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.08,
      })
      .to(iLineTarget, {
        scaleY: 15, duration: 2, ease: 'expo.inOut',
      })

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        pin: textContainerRef.current,
        scrub: 1,
        start: 'top top',
        end: '+=3000',
      },
    })

    // 텍스트 컨테이너 확대
    scrollTl.to(textContainerRef.current, {
      scale: 30,
      ease: 'power2.in',
    })
    
    // main 요소의 배경색을 흰색으로 변경
    // 마지막 파라미터 '<'는 바로 앞의 애니메이션과 '동시에' 시작하라는 의미
    scrollTl.to(mainRef.current, {
      backgroundColor: 'white',
      ease: 'power2.in',
    }, '<')


    return () => {
      introTl.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      scrollTl.kill()
    }
  }, [])

  const addToRefs = (el: HTMLSpanElement | null) => {
    if (el && !lettersRef.current.includes(el)) {
      lettersRef.current.push(el)
    }
  }

  return (
    <>
      <main ref={mainRef} className="w-screen h-screen bg-black flex items-center justify-center">
        <div
          ref={textContainerRef}
          className="grid grid-cols-[auto_auto_1ch_auto] font-semibold text-white items-start"
          style={textStyle}
        >
          <span ref={addToRefs} className="col-start-1">K</span>
          <span ref={addToRefs} className="col-start-2">U</span>
          <span ref={addToRefs} className="col-start-4 justify-self-start">T</span>
          <div ref={iLineRef} className="col-start-3 row-start-1 justify-self-center w-[0.15em] h-[1em] bg-white relative top-[0.25em]"></div>
          <span ref={addToRefs} className="col-start-2 justify-self-start">S</span>
          <div className="col-start-4 justify-self-start flex">
            <span ref={addToRefs}>X</span>
            <span ref={addToRefs}>T</span>
            <span ref={addToRefs}>H</span>
          </div>
        </div>
      </main>

      <div style={{ height: '3000px', background: 'black' }}></div>
    </>
  )
}