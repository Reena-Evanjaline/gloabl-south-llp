import React from 'react';

function Faq() {
  const faqs = [
    {
      question: "What type of Organization is this?",
      answer: "An International Trade Promotion Organization, primarily targeted to promote SME businesses in the overseas markets."
    },
    {
      question: "What Geography do you work in?",
      answer: "We work with businesses from all geographies who want to do business in India."
    },
    {
      question: "Who runs this Organization?",
      answer: "It is being run by professionals who have two decades of experience in the areas mentioned in the service portfolio."
    },
    {
      question: "Is this a profit-making entity?",
      answer: "No, as of now the entity works on a cost-to-cost basis."
    },
    {
      question: "Who are your major clients?",
      answer: "Govt. bodies, Chambers, Independent firms etc."
    },
    {
      question: "Why should I avail your services?",
      answer: "We can handhold you to enter and establish in India with our proven network expertise."
    },
    {
      question: "Can you tell me about your Market Reports?",
      answer: "Yes, they offer a bird’s eye view of the given subject, generally not available in the public domain. We compile our reports from multiple domains including personal interviews."
    },
    {
      question: "What’s a Satellite Office?",
      answer: "We can function as your extended Branch Office — an efficient way to enter a new market without a huge investment upfront."
    },
    {
      question: "Do you find buyers to sell our products?",
      answer: "Yes, we can find buyers, arrange interactions and follow up until a logical conclusion is reached."
    },
    {
      question: "What's your experience in Trade Missions?",
      answer: "We have handled more than 100 Trade Missions. They are a great window to analyze business opportunities and build local buyer relationships."
    },
    {
      question: "Do you undertake liasoning with local Governments to participate in tenders?",
      answer: "Yes, we do that on a case-by-case basis."
    },
    {
      question: "What kind of Roadshows/Campaigns do you undertake?",
      answer: "We conduct Exhibition Promotions, New Product Launches, etc., using design thinking. We're not an Event Management Company."
    },
    {
      question: "Do you cater to both domestic and foreign companies?",
      answer: "Yes, based on the client's request and our in-house expertise — not their geographical location."
    },
    {
      question: "Our entity is large; how can you still help us?",
      answer: "If you're large, let us handle what we're good at while you focus elsewhere. If you're small, we’ll minimize your risk and cost."
    },
    {
      question: "We don’t have a Trade Office in India. Can you be one for us?",
      answer: "Yes, we can act as your dedicated Trade Office and leverage our network to promote your country’s enterprises in India."
    },
    {
      question: "We already have a Commercial Attaché in India. Can you still help?",
      answer: "Yes. Diplomatic missions are often short-staffed. We simplify their tasks and act as a force multiplier."
    },
    {
      question: "How can I start business with your company?",
      answer: "Fill out the inquiry form, and our representative will reach out to you shortly."
    },
    {
      question: "How does the service fee work?",
      answer: "It can be assignment-specific or on an annual subscription basis."
    },
    {
      question: "Do you have a tariff card?",
      answer: "No, most of our quotes are tailor-made because different products require different approaches."
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="mb-4">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded={index === 0 ? 'true' : 'false'}
                aria-controls={`collapse${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
