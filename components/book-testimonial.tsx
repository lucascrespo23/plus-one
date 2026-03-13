'use client'

import React, { useRef, useCallback, useEffect, useState } from 'react'
// @ts-ignore
import HTMLFlipBook from 'react-pageflip'

const agents = [
  {
    name: 'Zosia',
    img: '/img/agent3.jpg',
    reportsTo: 'Brandon',
    role: 'COO',
    worksWith: 'Austin, Montaige, Dan, R2C2',
    testimonial: "Zosia is my go-to. She's my assistant, marketing partner, code writer, and she never drops the ball.",
    humanName: 'Brandon',
    humanRole: 'COO',
    humanImg: '/img/person5.jpg',
  },
  {
    name: 'Judd',
    img: '/img/agent1.jpg',
    reportsTo: 'Austin',
    role: 'CTO',
    worksWith: 'Milo, Paridhi, Lucas',
    testimonial: "Judd shipped an MVP in 2 hours that would have taken us a week. It's like having a senior engineer on call 24/7.",
    humanName: 'Austin',
    humanRole: 'CTO',
    humanImg: '/img/person1.jpg',
  },
  {
    name: 'Iris',
    img: '/img/agent5.jpg',
    reportsTo: 'Anukshi',
    role: 'Marketing',
    worksWith: 'Zosia, Alfredo, Elle',
    testimonial: 'Iris writes better launch copy than most humans. She knows our voice, our tone, and our audience.',
    humanName: 'Anukshi',
    humanRole: 'Marketing',
    humanImg: '/img/person4.jpg',
  },
  {
    name: 'Jalaiyah',
    img: '/img/agent2.jpg',
    reportsTo: 'Elle',
    role: 'Support Lead',
    worksWith: 'Zosia, Iris, Milo',
    testimonial: "Jalaiyah handles support tickets so fast our users think we hired a whole team. Best investment we've made.",
    humanName: 'Elle',
    humanRole: 'Support',
    humanImg: '/img/person2.jpg',
  },
  {
    name: 'Manousos',
    img: '/img/agent4.jpg',
    reportsTo: 'Lucas',
    role: 'Design',
    worksWith: 'Judd, Paridhi, Iris',
    testimonial: "Manousos iterates on design options faster than I can give feedback. It's changed how we ship product.",
    humanName: 'Lucas',
    humanRole: 'Design',
    humanImg: '/img/person6.jpg',
  },
  {
    name: 'Alfredo',
    img: '/img/agent6.jpg',
    reportsTo: 'Dan',
    role: 'Revenue',
    worksWith: 'Zosia, Julik, Iris',
    testimonial: 'I promoted myself from account manager to strategist. Zosia handles the day-to-day so I can focus on what matters.',
    humanName: 'Dan',
    humanRole: 'Revenue',
    humanImg: '/img/person3.jpg',
  },
]

export default function BookTestimonial() {
  const book = useRef<any>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const hasFlipped = useRef(false)
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = 14

  const flipTo = useCallback((page: number) => {
    book.current?.pageFlip()?.flip(page)
  }, [])

  // Force the empty spread slot to be transparent
  // The library sets style.cssText on .stf__item elements, overriding CSS.
  // We use a MutationObserver to continuously enforce transparency on the empty slot.
  useEffect(() => {
    const interval = setInterval(() => {
      const items = document.querySelectorAll('.stf__item')
      if (items.length > 0) {
        // The last .stf__item is the empty right-page slot in spread mode
        const lastItem = items[items.length - 1] as HTMLElement
        // Check if it has no meaningful content (empty spread slot)
        if (lastItem && (!lastItem.children.length || lastItem.children[0]?.children?.length === 0)) {
          lastItem.style.setProperty('background', 'transparent', 'important')
          lastItem.style.setProperty('box-shadow', 'none', 'important')
        }
      }
    }, 100)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasFlipped.current) {
            hasFlipped.current = true
            setTimeout(() => {
              book.current?.pageFlip()?.flipNext()
            }, 600)
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 flex flex-col items-center"
      style={{ background: '#F3F2EE' }}
    >
      <div
        style={{
          background: 'transparent',
          borderRadius: 16,
          padding: '56px 40px',
          width: '100%',
          maxWidth: 1400,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 80,
        }}
      >
        {/* Left: Heading */}
        <div style={{ flex: '1 1 auto', maxWidth: 420 }}>
          <h2
            className="font-light tracking-tight"
            style={{
              fontFamily: 'var(--font-signifier, Georgia, serif)',
              textAlign: 'left',
              lineHeight: 1.1,
              margin: 0,
              fontSize: '3rem',
            }}
          >
            Every human deserves a Plus One
          </h2>
        </div>

        {/* Right: Book */}
        <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
          <img
            src="/img/made-by-every.jpg"
            alt="Made by Every"
            style={{
              position: 'absolute',
              right: 40,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 200,
              opacity: 0.85,
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />
          {/* @ts-ignore */}
          <HTMLFlipBook
            ref={book}
            width={340}
            height={480}
            showCover={true}
            drawShadow={true}
            flippingTime={800}
            usePortrait={false}
            startPage={0}
            size="fixed"
            minWidth={300}
            maxWidth={680}
            minHeight={420}
            maxHeight={540}
            maxShadowOpacity={0.3}
            mobileScrollSupport={true}
            className=""
            style={{}}
            startZIndex={0}
            autoSize={false}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={false}
            onFlip={(e: any) => setCurrentPage(e.data)}
          >
            {/* COVER (page 0) */}
            <div
              className="relative overflow-hidden"
              style={{
                background: '#1a1f3d',
                borderRadius: '0 8px 8px 0',
                width: 340,
                height: 480,
              }}
            >
              <img
                src="/img/passport-cover.jpg"
                alt="Plus One Passport"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '0 8px 8px 0',
                }}
              />
            </div>

            {/* AGENT PAGES — 2 pages per agent: profile + testimonial */}
            {agents.flatMap((agent) => [
              <div
                key={`${agent.name}-profile`}
                style={{
                  background: '#FFFFFF',
                  width: 340,
                  height: 480,
                  boxSizing: 'border-box',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    padding: '48px 40px',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    boxSizing: 'border-box',
                  }}
                >
                  <img
                    src={agent.img}
                    alt={agent.name}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      marginBottom: 16,
                      border: '3px solid #eee',
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: 'var(--font-signifier, Georgia, serif)',
                      fontSize: 28,
                      fontWeight: 400,
                      color: '#1a1f3d',
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {agent.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: '#666',
                      marginTop: 10,
                      lineHeight: 1.5,
                    }}
                  >
                    Reports to <strong>{agent.reportsTo}</strong>, {agent.role}
                  </p>
                  <p style={{ fontSize: 13, color: '#999', marginTop: 6 }}>
                    Works with {agent.worksWith}
                  </p>
                </div>
              </div>,

              <div
                key={`${agent.name}-testimonial`}
                style={{
                  background: '#FFFFFF',
                  width: 340,
                  height: 480,
                  boxSizing: 'border-box',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    padding: '48px 40px',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    boxSizing: 'border-box',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: 48,
                      lineHeight: 1,
                      color: '#ddd',
                      marginBottom: 4,
                    }}
                  >
                    &ldquo;
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-signifier, Georgia, serif)',
                      fontSize: 16,
                      fontStyle: 'italic',
                      lineHeight: 1.65,
                      color: '#333',
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      margin: 0,
                    }}
                  >
                    {agent.testimonial}
                  </p>
                  <div
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: 48,
                      lineHeight: 1,
                      color: '#ddd',
                      textAlign: 'right',
                      marginTop: 4,
                      marginBottom: 12,
                    }}
                  >
                    &rdquo;
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      marginTop: 8,
                    }}
                  >
                    <img
                      src={agent.humanImg}
                      alt={agent.humanName}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        objectFit: 'cover',
                      }}
                    />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#1a1f3d' }}>
                        {agent.humanName}
                      </div>
                      <div style={{ fontSize: 12, color: '#999' }}>
                        {agent.humanRole}
                      </div>
                    </div>
                  </div>
                </div>
              </div>,
            ])}

            {/* BACK COVER */}
            <div
              style={{
                background: '#1a1f3d',
                width: 340,
                height: 480,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '0 8px 8px 0',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-signifier, Georgia, serif)',
                  fontSize: 28,
                  color: '#F5F3EE',
                  fontWeight: 300,
                  letterSpacing: 4,
                }}
              >
                PLUS ONE
              </h2>
              <p style={{ fontSize: 14, color: '#8888aa', marginTop: 8 }}>
                every.to
              </p>
            </div>
          </HTMLFlipBook>

          {/* Arrow controls — below the book */}
          <div
            style={{
              marginTop: 28,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 32,
            }}
          >
            <button
              onClick={() => book.current?.pageFlip()?.flipPrev()}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 8,
                color: '#999',
                fontSize: 24,
                lineHeight: 1,
                transition: 'color 0.2s',
                visibility: currentPage === 0 ? 'hidden' : 'visible',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#333')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#999')}
              aria-label="Previous page"
            >
              ←
            </button>
            <button
              onClick={() => book.current?.pageFlip()?.flipNext()}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 8,
                color: '#999',
                fontSize: 24,
                lineHeight: 1,
                transition: 'color 0.2s',
                visibility: currentPage >= totalPages - 2 ? 'hidden' : 'visible',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#333')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#999')}
              aria-label="Next page"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
