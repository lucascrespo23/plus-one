'use client'

import React, { useRef, useCallback, useEffect } from 'react'
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

  const flipTo = useCallback((page: number) => {
    book.current?.pageFlip()?.flip(page)
  }, [])

  // Auto-open passport when section reaches center of viewport
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
          background: '#E8E6E0',
          borderRadius: 16,
          padding: '56px 64px',
          width: '100%',
          maxWidth: 1100,
          display: 'flex',
          alignItems: 'center',
          gap: 48,
        }}
      >
        {/* Left: Heading */}
        <div style={{ flex: '0 0 36%' }}>
          <h2
            className="text-4xl md:text-5xl font-light tracking-tight"
            style={{
              fontFamily: 'var(--font-signifier, Georgia, serif)',
              textAlign: 'left',
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Every human deserves a Plus One
          </h2>
        </div>

        {/* Right: Book */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          {/* @ts-ignore */}
          <HTMLFlipBook
            ref={book}
            width={340}
            height={480}
            showCover={true}
            drawShadow={true}
            flippingTime={800}
            usePortrait={true}
            startPage={0}
            size="fixed"
            minWidth={300}
            maxWidth={400}
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
          >
            {/* COVER */}
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

            {/* INDEX */}
            <div
              style={{
                background: '#F5F3EE',
                width: 340,
                height: 480,
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-signifier, Georgia, serif)',
                  fontSize: 22,
                  fontWeight: 400,
                  marginBottom: 8,
                  color: '#1a1f3d',
                }}
              >
                The Team
              </h3>
              <div
                style={{
                  width: 40,
                  height: 2,
                  background: '#1a1f3d',
                  marginBottom: 24,
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {agents.map((agent, i) => (
                  <div
                    key={agent.name}
                    onClick={() => flipTo(i + 2)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      cursor: 'pointer',
                    }}
                  >
                    <img
                      src={agent.img}
                      alt={agent.name}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        objectFit: 'cover',
                      }}
                    />
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-signifier, Georgia, serif)',
                          fontSize: 16,
                          color: '#1a1f3d',
                          fontWeight: 500,
                        }}
                      >
                        {agent.name}
                      </div>
                      <div style={{ fontSize: 12, color: '#888', marginTop: 1 }}>
                        Reports to {agent.reportsTo}
                      </div>
                    </div>
                    <div
                      style={{
                        marginLeft: 'auto',
                        fontSize: 12,
                        color: '#aaa',
                      }}
                    >
                      p.{i + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AGENT PAGES */}
            {agents.map((agent, i) => (
              <div
                key={agent.name}
                style={{
                  background: '#FAFAF7',
                  width: 340,
                  height: 480,
                  padding: '32px 26px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                {/* Top section */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <img
                    src={agent.img}
                    alt={agent.name}
                    style={{
                      width: 88,
                      height: 88,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      marginBottom: 12,
                      border: '3px solid #eee',
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: 'var(--font-signifier, Georgia, serif)',
                      fontSize: 26,
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
                      fontSize: 13,
                      color: '#666',
                      marginTop: 6,
                      lineHeight: 1.4,
                    }}
                  >
                    Reports to <strong>{agent.reportsTo}</strong>, {agent.role}
                  </p>
                  <p style={{ fontSize: 12, color: '#999', marginTop: 2 }}>
                    Works with {agent.worksWith}
                  </p>
                </div>

                {/* Divider */}
                <div
                  style={{
                    width: '100%',
                    height: 1,
                    background: '#e0ddd5',
                    margin: '18px 0',
                  }}
                />

                {/* Testimonial */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: 36,
                      lineHeight: 1,
                      color: '#ccc',
                      marginBottom: -4,
                    }}
                  >
                    &ldquo;
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-signifier, Georgia, serif)',
                      fontSize: 15,
                      fontStyle: 'italic',
                      lineHeight: 1.6,
                      color: '#333',
                      flex: 1,
                    }}
                  >
                    {agent.testimonial}
                  </p>

                  {/* Human attribution */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      marginTop: 12,
                    }}
                  >
                    <img
                      src={agent.humanImg}
                      alt={agent.humanName}
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        objectFit: 'cover',
                      }}
                    />
                    <div>
                      <div
                        style={{ fontSize: 13, fontWeight: 600, color: '#1a1f3d' }}
                      >
                        {agent.humanName}
                      </div>
                      <div style={{ fontSize: 11, color: '#999' }}>
                        {agent.humanRole}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Page number */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 12,
                    right: 18,
                    fontSize: 11,
                    color: '#ccc',
                  }}
                >
                  {i + 1}
                </div>
              </div>
            ))}

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
        </div>
      </div>
    </section>
  )
}
