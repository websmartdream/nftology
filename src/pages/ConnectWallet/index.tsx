import React from 'react'

import { PageContainter } from '../../styledComponents/layout/StyledMainLayout'
import DescriptionCard from './DescriptionCard'
import SubmitForm from './SubmitForm'
import ThankYou from './ThankYou'

const ConnectWallet: React.FC = () => {
  return (
    <PageContainter>
      <ThankYou />
      <SubmitForm />
      <DescriptionCard />
    </PageContainter>
  )
}

export default ConnectWallet
