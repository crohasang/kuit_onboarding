'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Page() {
  const lettersRef = useRef<Array<HTMLSpanElement | null>>([])
  const iLineRef = useRef<HTMLDivElement | null>(null)

  const textStyle = {
    fontSize: 'clamp(48px, 9vw, 120px)',
    lineHeight: 1.2,
  }

  useEffect(() => {
    const letterTargets = lettersRef.current.filter(el => el !== null)
    const iLineTarget = iLineRef.current
    const tl = gsap.timeline()

    gsap.set(letterTargets, { autoAlpha: 0, y: 10 })
    // ✅ 1. 'I' 라인의 초기 상태를 '보이는 상태(autoAlpha: 1)'로 변경
    gsap.set(iLineTarget, { autoAlpha: 1, scaleY: 0, transformOrigin: 'top center' })

    tl
      .to(letterTargets, {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.08,
      })
      // ✅ 2. 'fromTo' 대신 간단한 'to'를 사용하여 scaleY만 애니메이션
      .to(iLineTarget, {
        scaleY: 15,
        duration: 2,
        ease: 'expo.inOut',
      })

    return () => {
      tl.kill()
    }
  }, [])

  const addToRefs = (el: HTMLSpanElement | null) => {
    if (el && !lettersRef.current.includes(el)) {
      lettersRef.current.push(el)
    }
  }

  return (
    <main className="w-screen h-screen bg-black flex items-center justify-center">
      <div
        className="grid grid-cols-[auto_auto_1ch_auto] font-semibold text-white items-start"
        style={textStyle}
      >
        <span ref={addToRefs} className="col-start-1">K</span>
        <span ref={addToRefs} className="col-start-2">U</span>
        <span ref={addToRefs} className="col-start-4 justify-self-start">T</span>

        <div
          ref={iLineRef}
          className="col-start-3 row-start-1 justify-self-center w-[0.15em] h-[1em] bg-white relative top-[0.25em]"
        ></div>

        <span ref={addToRefs} className="col-start-2 justify-self-start">S</span>
        <div className="col-start-4 justify-self-start flex">
          <span ref={addToRefs}>X</span>
          <span ref={addToRefs}>T</span>
          <span ref={addToRefs}>H</span>
        </div>
      </div>
    </main>
  )
}