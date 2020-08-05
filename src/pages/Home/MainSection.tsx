import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const MainSection = ({ children }: Props): JSX.Element => (
  <section
    className="min-h-screen px-4 py-8 md:py-16 bg-mononchrome-400"
    style={{
      backgroundImage: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
    }}
  >
    <div className="grid max-w-screen-md grid-cols-1 gap-5 mx-auto sm:grid-cols-2">
      {children}
    </div>
  </section>
)

export default MainSection
