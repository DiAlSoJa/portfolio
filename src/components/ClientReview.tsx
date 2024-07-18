import Image from "next/image";

interface Props{
    name: String,
    role:String,
    image: String
}

const ClientReview = ({ name, role, image }: Props) => {
    return (
      <div className="flex flex-col text-center justify-center">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          objectFit="contain"
          className="mx-auto mb-[2rem] rounded-full"
        />
        <div className="flex items-center mx-auto">
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>

        </div>
        <h1 className="text-[25px] text-white mt-[1rem]">{name}</h1>
        <p className="text-[18px] text-white opacity-75 mt-[0.5rem] mb-[1.4rem]">
        {role}
        </p>
        <p className="text-[16px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi obcaecati nam consequatur ea modi doloremque tenetur nemo dicta voluptas. Cupiditate id, accusamus aut mollitia aperiam excepturi distinctio sint eveniet quisquam.
        </p>
      </div>
    );
  };
 
export default ClientReview;