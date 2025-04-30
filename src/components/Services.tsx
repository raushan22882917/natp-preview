
export const Services = () => {
  const services = [
    {
      title: "Expert Article Creation to Showcase Your Brand and Trademark Effectively",
      description: "Our services include trademark publication, professional article creation, and SEO optimization.",
      icon: "📝",
    },
    {
      title: "SEO Strategies to Enhance Your Brand's Online Presence and Reach",
      description: "We implement effective SEO techniques to boost your brand's visibility in search results.",
      icon: "🔍",
    },
    {
      title: "Trademark Publication Services to Promote Your Brand Identity",
      description: "Our trademark publication service ensures your brand is recognized and protected.",
      icon: "✨",
    },
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        Comprehensive Services to Elevate Your Brand Visibility and Trademark Awareness
      </h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.title} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <button className="primary-btn">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};
