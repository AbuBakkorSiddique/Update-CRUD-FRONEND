import { CountUp } from 'use-count-up'

function Features() {
  return (
   <>
  <div className="stats stats-vertical lg:stats-horizontal lg:h-auto lg:w-auto w-full h-screen shadow">
  <div className="stat w-full h-full lg:w-auto lg:h-auto text-center lg:text-left bg-base-200">
    <div className="stat-title">Total</div>
    <div className="stat-value"><CountUp isCounting end={125} duration={1} /></div>
    <div className="stat-desc">DISH</div>
  </div>
  <div className="stat w-full h-full lg:w-auto lg:h-auto text-center lg:text-left bg-base-200">
    <div className="stat-title">Capable Customer</div>
    <div className="stat-value"><CountUp isCounting end={1320} duration={3.2} /></div>
    <div className="stat-desc">BIG Space</div>
  </div>
  <div className="stat w-full h-full lg:w-auto lg:h-auto text-center lg:text-left bg-base-200">
    <div className="stat-title">EveryDay</div>
    <div className="stat-value"><CountUp isCounting end={20} duration={3.2} />+</div>
    <div className="stat-desc">Country People</div>
  </div>
  <div className="stat w-full h-full lg:w-auto lg:h-auto text-center lg:text-left bg-base-200">
    <div className="stat-title">Quality Of Tea</div>
    <div className="stat-value"><CountUp isCounting end={21} duration={1} />+</div>
    <div className="stat-desc">Very Testy</div>
  </div>
  <div className="stat w-full h-full lg:w-auto lg:h-auto text-center lg:text-left bg-base-200">
    <div className="stat-title">Award </div>
    <div className="stat-value"><CountUp isCounting end={13} duration={.5} /></div>
    <div className="stat-desc">Per Year(14%)</div>
  </div>
</div>

   </>
  )
}

export default Features