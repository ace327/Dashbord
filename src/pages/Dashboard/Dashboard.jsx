import React from 'react'
import DashboardLayout from '../../components/DashboardLayout.jsx'
import PortfolioSection from './components/PortfolioSection.jsx'
import PriceSection from './components/PriceSection.jsx'
import { Grid, GridItem } from '@chakra-ui/react'
import Transactions from './components/Transactions.jsx'
import InfoCard from './components/InfoCard.jsx'

const Dashboard = () => {
  return (
    <div>
     <DashboardLayout title="Dashboard">
      <Grid gridTemplateColumns={{

        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
      }}
      
      gap={6} alignItems={"start"}>

        <GridItem colSpan={2}>



      <PortfolioSection />

        </GridItem>

        <GridItem colSpan={1} style={{ display: 'flex', flexDirection: 'column' }}>


      <div>

      
      <PriceSection />

      </div>


      



        </GridItem>

        <GridItem colSpan={1}>

          <Transactions />
        </GridItem>

        <GridItem colSpan={1}>
          <InfoCard 
          imgUrl="./public/Shapes.png"
          text="Learn more about Loans - Keep your Bitcoin, access it's value without selling it"
           tagText="Loan"
           inverted={false}/>
        </GridItem>

        <GridItem colSpan={1}>
          <InfoCard
           imgUrl="./public/Visual.png" 
           text="Learn more about Loans - Keep your Bitcoin, access it's value without selling it"
           tagText="Loan" 
           inverted={true}/>
        </GridItem>
      </Grid>

     </DashboardLayout>
    </div>
  )
}

export default Dashboard
