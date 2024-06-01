import "./OurServices.css";
import adminstration from "../../assets/images/admistration.png";

const OurServices = () => {
  const services: any[] = [
    {
      name: "Web Development",
      icon: adminstration,
      description:
        "We offer a full range of web and app development services customized to meet the unique needs of your business. Our expert team is dedicated to delivering innovative and effective digital solutions to help you succeed.",
    },
    {
      name: "Mobile App Developemnt",
      icon: adminstration,
      description:
        "We offer a full range of web and app development services customized to meet the unique needs of your business. Our expert team is dedicated to delivering innovative and effective digital solutions to help you succeed.",
    },
    {
      name: "Search Engine Optimization",
      icon: adminstration,
      description:
        "We offer a full range of web and app development services customized to meet the unique needs of your business. Our expert team is dedicated to delivering innovative and effective digital solutions to help you succeed.",
    },
    {
      name: "Web Administration",
      icon: adminstration,
      description:
        "We offer a full range of web and app development services customized to meet the unique needs of your business. Our expert team is dedicated to delivering innovative and effective digital solutions to help you succeed.",
    },
  ];

  return (
    <div className="OurServices">
      <div className="Service-Des px-5 py-5">
        <h3 className="mt-3">
          COMPREHENSIVE <span>DEVELOPMENT SERVICES</span> TAILORED TO YOUR
          BUSINESS NEEDS
        </h3>

        <p>
          We offer a comprehensive range of web and app development services
          designed to cater to the unique needs of your business. Our team of
          skilled developers, designers, and strategists work collaboratively to
          deliver tailored solutions that align with your business goals. From
          intuitive websites to robust mobile applications, we utilize the
          latest technologies and best practices to create digital experiences
          that engage users and drive results. Our commitment to innovation and
          excellence ensures that we provide effective and scalable solutions,
          helping your business thrive in the digital landscape. Partner with us
          to transform your ideas into reality and achieve your digital
          ambitions.
        </p>
      </div>

      <div className="Service-Cards row gx-0 px-5 pb-5">
        {services.map((service) => (
          <div className="col-3 px-2">
            <div className="Service-Card pt-4 pb-3 px-4">
              <h6 className="text-center pb-4">{service.name}</h6>
              <img src={service.icon} alt="" />
              <p className="mt-4">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="Enhasments px-5 pt-3">
        <div className="row">
          <div className="col-6">
            <h3 className="mt-3">
              ENHANCE <span>YOUR BUSINESS</span> WITH OUR DIGITAL SOLUTIONS
            </h3>
            <p>
              Unlock the full potential of your business with our comprehensive
              digital solutions, meticulously crafted to enhance every facet of
              your online presence and propel your growth trajectory to new
              heights. Whether you're seeking to establish an impressive virtual
              storefront with a captivating website or to seamlessly integrate
              your brand into the daily lives of your customers with a
              sophisticated mobile application, our dedicated team of experts is
              poised to transform your aspirations into reality. From the
              initial concept to the final product, we prioritize user-centric
              design principles and cutting-edge technologies to ensure that
              every digital solution we deliver not only meets but exceeds your
              expectations. Our websites are not mere static pages but dynamic
              hubs of interaction, meticulously optimized to attract organic
              traffic and provide visitors with an immersive and intuitive
              browsing experience. Meanwhile, our mobile apps serve as
              invaluable extensions of your brand, offering unparalleled
              convenience and engagement through personalized features and
              real-time analytics insights. Embrace the limitless possibilities
              of the digital age and embark on a transformative journey with us
              as your trusted partner in innovation, empowering your business to
              thrive in an ever-evolving digital landscape.
            </p>
          </div>

          <div className="col-6 Service-Image position-relative py-3">
            <h3 className="mt-3">
              ENHANCE <span>YOUR BUSINESS</span> WITH OUR DIGITAL SOLUTIONS
            </h3>
            <p>
              Unlock the full potential of your business with our comprehensive
              digital solutions, meticulously crafted to enhance every facet of
              your online presence and propel your growth trajectory to new
              heights. Whether you're seeking to establish an impressive virtual
              storefront with a captivating website or to seamlessly integrate
              your brand into the daily lives of your customers with a
              sophisticated mobile application, our dedicated team of experts is
              poised to transform your aspirations into reality. From the
              initial concept to the final product, we prioritize user-centric
              design principles and cutting-edge technologies to ensure that
              every digital solution we deliver not only meets but exceeds your
              expectations. Our websites are not mere static pages but dynamic
              hubs of interaction, meticulously optimized to attract organic
              traffic and provide visitors with an immersive and intuitive
              browsing experience. Meanwhile, our mobile apps serve as
              invaluable extensions of your brand, offering unparalleled
              convenience and engagement through personalized features and
              real-time analytics insights. Embrace the limitless possibilities
              of the digital age and embark on a transformative journey with us
              as your trusted partner in innovation, empowering your business to
              thrive in an ever-evolving digital landscape.
            </p>

            <div className="Fetch_image"></div>
          </div>
        </div>
      </div>

      <div className="Key-Benefits px-5 pt-5">
        <h3 className="mt-3">
          WHY CHOOSE US AS YOUR <span>TRUSTED</span> DIGITAL PARTNER
        </h3>
      </div>
    </div>
  );
};

export default OurServices;
