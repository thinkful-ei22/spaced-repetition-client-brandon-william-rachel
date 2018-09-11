import React from 'react';

import Feedback from './feedback';

export default function FeedbackSection(props) {
  const { feedback } = props;

  return (
    <section>
      <Feedback feedback={feedback} />
    </section>
  );
};
