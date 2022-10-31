import React from 'react'
import BgFinance from '../../assets/img/christian-wiediger-RYWEyXopmM4-unsplash.jpeg'
import profile1 from '../../assets/img/team-1-800x800.jpg'
import CardStocklist from '../../components/cards/card-stock-list'
import CardStats from '../../components/cards/card-stats'

const DashboardView = ({
  data,
  loading,
}) => (
  <main className="profile-page">
    <section className="relative block h-500-px">
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: `url('${BgFinance}')`,
        }}
      >
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-50 bg-black"
        ></span>
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
        style={{ transform: 'translateZ(0)' }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-blueGray-200 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </section>
    <section className="relative py-16 bg-blueGray-200">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full flex justify-center  mb-10">
                <div className="relative">
                  <img
                    alt="..."
                    src={profile1}
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                  />
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                Ramon Julia
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{' '}
                Los Angeles, California
              </div>
              <div className="mb-2 text-blueGray-600 mt-10">
                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                Solution Manager - Creative Tim Officer
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 ">
              <div className="flex flex-wrap mb-10">
                <div className="w-full lg:w-6/12  xl:w-3/12 px-4">
                  <CardStats
                    statSubtitle="TOTAL INVEST"
                    statTitle="350,897"
                    statArrow="up"
                    statPercent="3.48"
                    statPercentColor="text-emerald-500"
                    statDescripiron="Since last month"
                    statIconName="fa-solid fa-chart-column"
                    statIconColor="bg-red-500"
                  />
                </div>
                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <CardStats
                    statSubtitle="TOTAL GAIN"
                    statTitle="2,356"
                    statArrow="down"
                    statPercent="3.48"
                    statPercentColor="text-red-500"
                    statDescripiron="Since last week"
                    statIconName="fa-solid fa-chart-line"
                    statIconColor="bg-orange-500"
                  />
                </div>
              </div>
              <div className="w-full mb-12 xl:mb-0 px-4 text-center">
                <CardStocklist data={data.data}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

)

export default DashboardView
