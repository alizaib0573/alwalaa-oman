import { PrismaClient } from '@prisma/client';
import { generateSlug } from '../src/lib/slugs';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting slug migration...');

  // 1. Migrate Communities
  const communities = await prisma.community.findMany();
  console.log(`Processing ${communities.length} communities...`);

  for (const community of communities) {
    const slug = generateSlug(community.name);
    await prisma.community.update({
      where: { id: community.id },
      data: { slug },
    });
  }
  console.log('Communities migrated.');

  // 2. Migrate Agents
  const agents = await prisma.agent.findMany();
  console.log(`Processing ${agents.length} agents...`);

  for (const agent of agents) {
    const slug = generateSlug(agent.fullName);
    await prisma.agent.update({
      where: { id: agent.id },
      data: { slug },
    });
  }
  console.log('Agents migrated.');

  console.log('Slug migration completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
