import { PrismaClient, AgentRole, InvestmentGrade } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seeding...');

  // Clear existing data to start fresh
  await prisma.investmentMetric.deleteMany({});
  await prisma.property.deleteMany({});
  await prisma.community.deleteMany({});
  await prisma.agent.deleteMany({});

  // 1. Create an Agent
  const agent = await prisma.agent.create({
    data: {
      userId: '00000000-0000-0000-0000-000000000000',
      fullName: 'Ahmed Al-Walaa',
      email: 'admin@alwalaa.com',
      phone: '+968 9000 0000',
      bio: 'Chief Investment Officer at AlWalaa, specializing in luxury real estate and high-yield investments in Oman.',
      role: AgentRole.ADMIN,
      isActive: true,
    },
  });

  console.log('Agent created.');

  // 2. Create Communities
  const communitiesData = [
    {
      slug: 'al-mouj',
      name: 'Al Mouj Muscat',
      description: 'A breathtaking waterfront community that seamlessly blends Mediterranean charm with Omani hospitality.',
      location: 'Muscat, Oman',
      imageUrl: '/p3.jpg',
      featured: true,
    },
    {
      slug: 'aida',
      name: 'AIDA',
      description: 'A visionary development that redefines the coastal experience, combining modern architecture with the raw beauty of Oman\'s southern coast.',
      location: 'Southern Coast, Oman',
      imageUrl: '/p1.jpg',
      featured: true,
    },
    {
      slug: 'muscat-bay',
      name: 'Muscat Bay',
      description: 'A sanctuary of luxury nestled between the mountains and the turquoise waters of Muscat Bay.',
      location: 'Muscat Coast, Oman',
      imageUrl: '/p4.jpg',
      featured: true,
    },
    {
      slug: 'sultan-haitham-city',
      name: 'Sultan Haitham City',
      description: 'The most ambitious urban project in Oman, focusing on sustainable and smart city living.',
      location: 'Muscat Central, Oman',
      imageUrl: '/p5.jpg',
      featured: true,
    },
    {
      slug: 'jebel-sifah',
      name: 'Jebel Sifah',
      description: 'A stunning coastal escape where nature\'s luxury meets the Arabian Sea.',
      location: 'East Muscat, Oman',
      imageUrl: '/p1.jpg',
      featured: false,
    },
  ];

  const communities = [];
  for (const data of communitiesData) {
    const community = await prisma.community.create({
      data: data,
    });
    communities.push(community);
  }

  console.log('Communities created.');

  // 3. Create Properties
  const properties = [];
  const communityCount = communities.length;

  const types = ['VILLA', 'APARTMENT', 'PENTHOUSE', 'TOWNHOUSE'];
  const statuses = ['READY_TO_MOVE', 'OFF_PLAN', 'UNDER_CONSTRUCTION', 'FOR_SALE'];

  for (let i = 0; i < 20; i++) {
    const community = communities[i % communityCount];
    const propertyNumber = Math.floor(i / communityCount) + 1;

    const type = types[i % types.length];
    const status = statuses[i % statuses.length];

    const price = (Math.random() * (2000000 - 150000) + 150000).toFixed(2);
    const area = (Math.random() * (1500 - 100) + 100).toFixed(2);

    const property = await prisma.property.create({
      data: {
        slug: `${community.slug}-prop-${i + 1}`,
        title: `${type.charAt(0) + type.slice(1).toLowerCase()} ${propertyNumber} in ${community.name}`,
        description: `An exquisite ${type.toLowerCase()} located in the heart of ${community.name}. This property offers unmatched luxury and sophisticated design, ensuring a premium living experience.`,
        type: type as any,
        status: status as any,
        city: community.location.split(',')[0].trim(),
        location: community.location,
        communityId: community.id,
        agentId: agent.id,
        price: price,
        currency: 'OMR',
        bedrooms: Math.floor(Math.random() * 5) + 1,
        bathrooms: Math.floor(Math.random() * 4) + 1,
        areaSqm: area,
        gallery: ['/p1.jpg', '/p2.jpg', '/p3.jpg', '/p4.jpg', '/p5.jpg'],
        amenities: ['Infinity Pool', 'Smart Home', 'Private Garden', 'Gym'],
        featured: i % 3 === 0,
      },
    });
    properties.push(property);
  }

  console.log('Properties created.');

  // 4. Create Investment Metrics
  for (let i = 0; i < 10; i++) {
    const property = properties[i];
    await prisma.investmentMetric.create({
      data: {
        propertyId: property.id,
        expectedRentalYield: (Math.random() * (9 - 4) + 4).toFixed(2),
        roiProjection: (Math.random() * (12 - 6) + 6).toFixed(2),
        paymentPlanDetails: '10% down payment, 40% during construction, 50% on completion.',
        investmentGrade: InvestmentGrade.A,
      },
    });
  }

  console.log('Investment metrics created.');
  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
