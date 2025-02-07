import React from "react";

const Timeline = () => {
  return (
    <div>
      <ul className="timeline text-justify text-black timeline-snap-icon max-md:timeline-compact timeline-vertical mt-10">
        <li>
          <div className="timeline-middle">
            <span className="text-4xl">🎯</span>
          </div>
          <div className="timeline-start mb-10 md:text-end bg-gray-100 p-5 rounded-lg shadow-md">
            <time className="font-mono italic text-blue-500">1st</time>
            <div className="text-lg font-black">Strategy Development</div>
            <p>🎯 Create a customized digital marketing strategy, which includes:</p>
            <p>🎯 Creating one without compromising for a landing page that specializes in lead generation or sales.</p>
            <p>🎯 Moving to the next level of utilizing a channel, you would need to plan a direct paid marketing campaign like Google Adwords, Facebook Ads, etc.</p>
            <p>🎯 About the specific SEO and social media strategies for improving website exposure.</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <span className="text-4xl">🚀</span>
          </div>
          <div className="timeline-end md:mb-10 bg-gray-100 p-5 rounded-lg shadow-md">
            <time className="font-mono italic text-blue-500">2nd</time>
            <div className="text-lg font-black">Landing Page Development</div>
            <p>🚀 To know how to design and implement the landing page using React due to its high dynamicity, responsiveness, and fast loading.</p>
            <p>🚀 Think about flexibility and build components with the purpose of reusing them in other parts of the system.</p>
            <p>🚀 Apply sleek design tools today such as Tailwind CSS or Material UI to gain a standardized look at work.</p>
            <p>🚀 Make sure to also add forms and CTA, leads capture to be proper.</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <span className="text-4xl">📈</span>
          </div>
          <div className="timeline-start mb-10 md:text-end bg-gray-100 p-5 rounded-lg shadow-md">
            <time className="font-mono italic text-blue-500">3rd</time>
            <div className="text-lg font-black">Marketing Campaign Setup</div>
            <p>📈 Advertise jobs on paid jobs portal or create job classifieds in targeted websites using Google Adwords, Facebook Ads, LinkedIn Ads, and so on.</p>
            <p>📈 Conduct your keyword research and audience analysis to identify the contacts you want to reach out to.</p>
            <p>📈 Create banners and videos in the style of the branding.</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <span className="text-4xl">📊</span>
          </div>
          <div className="timeline-end md:mb-10 bg-gray-100 p-5 rounded-lg shadow-md">
            <time className="font-mono italic text-blue-500">4th</time>
            <div className="text-lg font-black">Performance Monitoring</div>
            <p>📊 Follow fight metrics with Google Ads Manager and Facebook Insights and monitor progress and response constantly.</p>
            <p>📊 Offer consumers timely updates and how possibly they can improve.</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <span className="text-4xl">🎨</span>
          </div>
          <div className="timeline-start mb-10 md:text-end bg-gray-100 p-5 rounded-lg shadow-md">
            <time className="font-mono italic text-blue-500">last</time>
            <div className="text-lg font-black">Design Services</div>
            <p>🎨 Monitor campaign development regularly on Google Ads Manager as well as on the Facebook Insights tool.</p>
            <p>🎨 Regularly update customers and give them intelligence for improvement.</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
