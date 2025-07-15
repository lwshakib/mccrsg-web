
import Image from "next/image";

function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 mt-[70px]">
      <Image
        width={500}
        height={500}
        src="/den.jpg"
        alt="Den of Murarichand College Rover Scout Group"
        className="float-left w-96 aspect-video object-cover rounded-lg mr-6 mb-4 shadow"
      />
      <h1 className="text-3xl font-bold mb-6">
        Murarichand College Rover Scout Group
      </h1>
      <p className="mb-4">
        The Pakistan-India subcontinent's Scout movement was formed in 1910. In
        1920, the Bengal Boy Scout Association was recognized. Immediately after
        the formation of the provincial Scout organization, on February 12,
        1927, an M. C. College Rover Group was formed. The Rovering journey
        started with only 14 members. The Rover group was formed under the
        leadership of Professor P. C. Sanyal M. A.
      </p>
      <p className="mb-4">
        Murarichand College Rovering registration was on December 2, 1976.
      </p>
      <p className="mb-4">The Rover program officially started in 1980.</p>
      <h2 className="text-2xl font-semibold mb-4">After Registration</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>
          The first President of the Rover Scout Group was Professor Hasan
          Warish.
        </li>
        <li>
          The first Rover Leader of the Rover Scout Group was Abidul Islam.
        </li>
        <li>
          The first Senior Rover Mate of the Rover Scout Group was Ali Azgar
          Khan.
        </li>
        <li>
          The first Rover Scout Leader of the Rover Scout Group's Girls-in-Rover
          Unit was Sajia Afrin Khan.
        </li>
        <li>
          The first Senior Rover Mate of the Rover Scout Group's Girls-in-Rover
          Unit was Shamima Ferdous Nipa.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Registration Numbers</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>The Rover Scout Group's registration number is 110/78.</li>
        <li>The Girls-in-Rover Unit's registration number is 577/71.</li>
      </ul>
    </div>
  );
}

export default AboutPage;
