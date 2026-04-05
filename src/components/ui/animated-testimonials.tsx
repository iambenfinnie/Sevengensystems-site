import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'motion/react'
import { Quote, Star } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
}

export interface AnimatedTestimonialsProps {
  title?: string
  subtitle?: string
  badgeText?: string
  testimonials?: Testimonial[]
  autoRotateInterval?: number
  className?: string
}

export function AnimatedTestimonials({
  title = 'What our clients say',
  subtitle = "Real results from real businesses. Here's what people say after working with Seven Gen Systems.",
  badgeText = 'Client testimonials',
  testimonials = [],
  autoRotateInterval = 6000,
  className,
}: AnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  } as const

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  }

  useEffect(() => {
    if (isInView) controls.start('visible')
  }, [isInView, controls])

  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % testimonials.length)
    }, autoRotateInterval)
    return () => clearInterval(interval)
  }, [autoRotateInterval, testimonials.length])

  if (testimonials.length === 0) return null

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className={`py-24 overflow-hidden bg-slate-50 ${className ?? ''}`}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center"
        >
          {/* Left: heading + dot nav */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="space-y-6">
              {badgeText && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-teal-600/10 text-teal-600">
                  <Star className="h-3.5 w-3.5 fill-teal-600" />
                  {badgeText}
                </div>
              )}

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                {title}
              </h2>

              <p className="text-slate-500 leading-relaxed max-w-md">
                {subtitle}
              </p>

              {/* Dot navigation */}
              <div className="flex items-center gap-3 pt-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? 'w-10 bg-teal-600'
                        : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: animated testimonial cards */}
          <motion.div variants={itemVariants} className="relative min-h-[320px] md:min-h-[380px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 80 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 80,
                  scale: activeIndex === index ? 1 : 0.95,
                }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                style={{ zIndex: activeIndex === index ? 10 : 0 }}
              >
                <div className="bg-white border border-slate-200 shadow-md rounded-2xl p-7 h-full flex flex-col">
                  {/* Star rating */}
                  <div className="flex gap-1 mb-5">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-5 flex-1">
                    <Quote className="absolute -top-1 -left-1 h-7 w-7 text-teal-600/15 rotate-180" />
                    <p className="relative z-10 text-slate-700 leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                  </div>

                  <Separator className="my-4" />

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <Avatar className="h-11 w-11 border border-slate-200">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name.split(' ').map((n) => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{testimonial.name}</p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Decorative corners */}
            <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-xl bg-teal-600/5 pointer-events-none" />
            <div className="absolute -top-4 -right-4 h-20 w-20 rounded-xl bg-teal-600/5 pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
