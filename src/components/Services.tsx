interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard : React.FC<ServiceCardProps> = ({ title, description, icon }) => {


  return (
    <div data-aos="zoom-in" className="bg-slate-100 dark:bg-slate-700 shadow-md rounded-lg p-4 flex flex-col items-center text-center h-[300px]">
      <div className="text-3xl mb-3 p-4 border-2 border-slate-800 dark:border-slate-100">{icon}</div>
      <h3 className="text-lg  text-slate-800 dark:text-slate-100 font-bold text-[2.1rem] my-5">{title}</h3>
      <p className=" text-slate-700 dark:text-slate-200 ">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    { title: 'Web Development', description: 'Expertise in modern web technologies to build engaging websites.', icon: '🌐' },
    { title: 'Photography', description: 'Capturing stunning and vivid photographs for all occasions.', icon: '📷' },
    { title: 'Web Design', description: 'Designing aesthetically pleasing and user-friendly websites.', icon: '🎨' },
    { title: 'App Developing', description: 'Developing mobile applications that solve real-world problems.', icon: '📱' },
    { title: 'Video Editing', description: 'Creating compelling video content for diverse platforms.', icon: '🎥' },
    { title: 'SEO Expert', description: 'Optimizing websites to rank higher in search engine results.', icon: '🔍' }
  ];

  return (
    <div className=" py-10" id="servicios">
      <div className="container mx-auto px-4">
        <h2 className="text-[3rem] text-center text-slate-800 dark:text-slate-100 font-bold mb-6">
          Mi <span className="text-yellow-400">Servicios</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(service => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;