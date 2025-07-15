type Props = {};

function page({}: Props) {
  return (
    <div className="max-w-2xl mx-auto p-8 mt-[70px]">
      <h1 className="text-3xl font-bold mb-6">About Our Scout Organization</h1>
      <img
        src="https://picsum.photos/seed/scout/800/300"
        alt="Scouting activity"
        className="w-full rounded-xl my-6"
      />
      <p className="mb-8">
        Welcome to our Scout Organization! We are dedicated to empowering young
        people to make a positive contribution to society. Our mission is to
        provide fun, adventure, and learning opportunities that help our members
        develop leadership, teamwork, and outdoor skills.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
      <ul className="list-disc list-inside mb-8 space-y-2">
        <li>Respect for others and the environment</li>
        <li>Personal growth and self-discovery</li>
        <li>Community service and helping others</li>
        <li>Adventure and outdoor exploration</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Activities</h2>
      <p className="mb-8">
        Our scouts participate in a wide range of activities, including camping,
        hiking, community service projects, and skill-building workshops. We
        believe in learning by doing and encourage our members to challenge
        themselves and try new things.
      </p>
      <img
        src="https://picsum.photos/seed/scout2/600/200"
        alt="Scouts in action"
        className="w-full rounded-lg my-6"
      />
      <h2 className="text-2xl font-semibold mb-4">Join Us!</h2>
      <p>
        If you are interested in joining our scout family or want to learn more,
        please contact us or visit one of our meetings. Everyone is welcome!
      </p>
    </div>
  );
}

export default page;
