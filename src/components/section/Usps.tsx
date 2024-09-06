import { Container } from "../Container"
import { FadeIn } from "../Fade-in"

export const Usps = () => {
  return (
    <Container className="text-3xl max-w-[692px] z-10 relative py-36 font-semibold text-light space-y-12 md:text-4xl">
      <FadeIn>
        <p>New Apple Originals every month - always ad-free</p>
      </FadeIn>
      <FadeIn>
        <p>
          Stream on the Apple TV app on Apple devices, smart Tvs, consoles, or
          sticks
        </p>
      </FadeIn>
      <FadeIn>
        <p>
          Watch in 4K HDR video with immersive Spatial Audio
        </p>
      </FadeIn>
      <FadeIn>
        <p>
          Share a single subcription with up to five people.
        </p>
      </FadeIn>
    </Container>
  )
}
