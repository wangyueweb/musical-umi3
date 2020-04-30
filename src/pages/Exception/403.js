import React, { useState } from 'react';
import { useIntl, Link } from 'umi';
import Exception from '@/components/Exception';

export default function Exception403 (){
  const intl = useIntl();
  return (
    <Exception
      type="403"
      desc={intl.formatMessage({ id: 'app.exception.description.403' })}
      linkElement={Link}
      backText={intl.formatMessage({ id: 'app.exception.back' })}
    />
  )
}
