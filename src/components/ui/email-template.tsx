import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

 export default function EmailTemlplate(EmailTemplateProps: EmailTemplateProps) {
    const { firstName } = EmailTemplateProps;
    return (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
    );
 };