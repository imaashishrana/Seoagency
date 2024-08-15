import React from 'react';
const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-10 px-10">
      <div className="container mx-auto px-4">
        
      <div className="container  mx-auto mb-12">
          <h1 className="text-4xl bg-grey-400 text-center font-bold">About Us</h1>
        </div>

      {/* Company Overview Section */}
      <section className="relative mx-5 py-10 rounded  ">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-10 ">
            <h2 className="text-3xl text-fuchsia-600 font-bold">Ruby SEO</h2>
            <p className="mt-4">
              Welcome to Ruby SEO, your premier freelance SEO agency based in Surat, India. Run by Farah Kamil, a dedicated SEO freelancer with over 5 years of experience in digital marketing, Ruby SEO is committed to delivering exceptional SEO services tailored to your business needs.
            </p>
            <p className="mt-4">
              Founded by Farah Kamil, Ruby SEO was established to help businesses in India and beyond achieve their digital marketing goals. With a deep passion for SEO and a keen understanding of market trends, Farah has built a reputation for crafting highly effective SEO strategies that drive real results.
            </p>
            <p className="mt-4">
              At Ruby SEO, we specialize in creating customized SEO strategies that are designed to meet your specific needs. Our approach combines technical expertise with creative thinking to enhance your online presence and achieve sustainable growth.
            </p>
          </div>
          <div className="md:w-1/2 p-4 rounded">
            <img
              src="https://img.freepik.com/free-vector/digital-marketing-team-constructing-landing-home-page_74855-10590.jpg?t=st=1723695609~exp=1723699209~hmac=0a8e0cd84c337dd1d1c9416617d0e4f88f3543c98758b23e149bc94abd26193b&w=996"
              alt="Ruby SEO"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Mission, Vision, Purpose Section */}
      <section className="relative mx-5 py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4 rounded ">
            <img
              src="https://img.freepik.com/free-vector/startup-abstract-concept_335657-3029.jpg?t=st=1723695467~exp=1723699067~hmac=448c978ef6bcce8e881f2c59bff835e5418b5edcffc82c3954e2672199b5b8db&w=740"
              alt="Our Mission"
              className="w-full "
            />
          </div>
          <div className="md:w-1/2 p-10 ">
            <h2 className="text-3xl text-fuchsia-600 font-bold">Leading with a Distinct Perspective</h2>
            <div className="mt-6">
              <h3 className="text-2xl text-fuchsia-500 font-medium">Mission</h3>
              <p className="mt-2">
                To create innovative and effective SEO strategies that help businesses thrive in the digital world.
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl text-fuchsia-500 font-medium">Vision</h3>
              <p className="mt-2">
                To be a leading freelance SEO agency recognized for delivering exceptional results and driving digital success.
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl text-fuchsia-500 font-medium">Purpose</h3>
              <p className="mt-2">
                Our purpose is to empower businesses with the best SEO strategies to achieve their online goals and stand out in the competitive digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className=" p-10 mx-5  bg-white rounded-lg shadow-lg">
        <div className="container mx-auto text-center ">
          <h2 className="text-3xl text-fuchsia-600 font-bold mb-8">Brand Story</h2>
          <div className="max-w-3xl mx-auto">
            <p className="mb-4">
              At Ruby SEO, we take pride in our ability to craft personalized SEO solutions that drive tangible results. Founded by Farah Kamil, our agency has been dedicated to helping clients enhance their online presence and achieve digital success.
            </p>
            <p>
              We believe in a client-centric approach, focusing on delivering customized strategies that align with your business goals and exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative text-center my-5 mx-5 p-10  bg-white rounded-lg shadow-lg">
        <div className="container mx-auto">
          <h2 className="text-3xl text-fuchsia-600 font-bold mb-8">Our Ever-Evolving Journey</h2>
          <p className="max-w-3xl mx-auto ">
            Ruby SEO’s journey began with a mission to provide top-notch SEO services tailored to our clients' needs. Over the years, we have grown and evolved, always staying ahead of industry trends and delivering exceptional results.
          </p>
          
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="mx-5 p-10  bg-white rounded-lg shadow-lg">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-fuchsia-600 mb-8">What Sets Us Apart?</h2>
          <div className="flex  flex-wrap justify-center">
            {[
              { title: "Experience", description: "Over 5 years of expertise in SEO and digital marketing." },
              { title: "Customized Strategies", description: "Tailored SEO strategies to meet specific business needs." },
              { title: "Results-Driven", description: "Focused on delivering measurable results and achieving your goals." },
              { title: "Client-Centric", description: "Dedicated to understanding client expectations." },
              { title: "Innovative Approach", description: "Utilizing the latest trends and techniques in SEO." },
              { title: "Transparent Reporting", description: "Providing clear and detailed performance reports." },
            ].map((item, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="relative bg-cover bg-center py-20"
        style={{ backgroundImage: "url('/path/to/your-background-image.jpg')" }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-fuchsia-500 text-3xl font-bold mb-8">
            Connect with an expert to discuss your requirements now
          </h2>
          <a
            href="/contact-us"
            className="bg-fuchsia-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-fuchsia-400"
          >
            Discuss Now
          </a>
        </div>
      </section>

      {/* Footer Section */}
      </div>
    </section>
  );
};

export default AboutUs;
