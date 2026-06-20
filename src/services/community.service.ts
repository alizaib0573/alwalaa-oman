import { prisma } from "@/lib/prisma";
import { Prisma, Community } from "@prisma/client";

export const communityService = {
  async getAll() {
    return await prisma.community.findMany({
      include: {
        _count: {
          select: { properties: true },
        },
      },
      orderBy: { name: 'asc' },
    });
  },

  async getById(id: string) {
    return await prisma.community.findUnique({
      where: { id },
      include: { properties: true },
    });
  },

  async create(data: Prisma.CommunityUncheckedCreateInput) {
    return await prisma.community.create({
      data,
    });
  },

  async update(id: string, data: Prisma.CommunityUpdateInput) {
    return await prisma.community.update({
      where: { id },
      data,
    });
  },

  async delete(id: string) {
    return await prisma.community.delete({
      where: { id },
    });
  },
};
