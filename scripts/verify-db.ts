import prisma from '../src/lib/prisma';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function verify() {
  console.log('Starting database verification...');
  try {
    // 1. Create a test community
    const community = await prisma.community.upsert({
      where: { slug: 'sultan-haitham-city' },
      update: {},
      create: {
        id: 'sultan-haitham-city',
        slug: 'sultan-haitham-city',
        name: 'Sultan Haitham City',
        location: 'Muscat, Oman',
        description: 'The flagship residential project of Oman.',
        featured: true,
      },
    });
    console.log('✅ Community created/verified:', community.name);

    // 2. Create a test user + agent. Email/role live on User; Agent holds the
    // profile and links back via userId. Both are upserted by their unique keys
    // so the script is safe to re-run.
    const user = await prisma.user.upsert({
      where: { email: 'test-agent@alwalaa.com' },
      update: {},
      create: {
        email: 'test-agent@alwalaa.com',
        passwordHash: 'not-a-real-hash',
        role: 'AGENT',
        status: 'APPROVED',
        isActive: true,
      },
    });

    const agent = await prisma.agent.upsert({
      where: { slug: 'test-agent' },
      update: {},
      create: {
        id: 'test-agent',
        slug: 'test-agent',
        userId: user.id,
        fullName: 'Test Agent',
        phone: '+968 0000 0000',
        isActive: true,
      },
    });
    console.log('✅ Agent created/verified:', agent.fullName);

    // 3. Create a test property
    const property = await prisma.property.upsert({
      where: { slug: 'test-luxury-villa' },
      update: {},
      create: {
        slug: 'test-luxury-villa',
        title: 'Ultra Luxury Villa',
        description: 'A stunning masterpiece of architecture.',
        type: 'VILLA',
        status: 'FOR_SALE',
        city: 'Muscat',
        location: 'Sultan Haitham City',
        communityId: community.id,
        agentId: agent.id,
        price: 1000000,
        bedrooms: 5,
        bathrooms: 6,
        areaSqm: 500,
        gallery: ['https://example.com/img1.jpg'],
        amenities: ['Private Pool', 'Smart Home'],
      },
    });
    console.log('✅ Property created/verified:', property.title);

    // 4. Create investment metrics
    const metrics = await prisma.investmentMetric.upsert({
      where: { propertyId: property.id },
      update: {},
      create: {
        propertyId: property.id,
        expectedRentalYield: 7.5,
        roiProjection: 12.0,
        investmentGrade: 'A',
        paymentPlanDetails: '20% Down payment, balance on completion',
      },
    });
    console.log('✅ Investment metrics verified for:', property.title);

    console.log('\n🚀 Infrastructure verification SUCCESSFUL!');
  } catch (error) {
    console.error('\n❌ Infrastructure verification FAILED:');
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

verify();
