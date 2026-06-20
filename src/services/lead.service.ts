import { prisma } from "@/lib/prisma";
import { Prisma, LeadStatus } from "@prisma/client";

export interface LeadFilters {
  status?: LeadStatus;
  search?: string;
}

export const leadService = {
  async getAll(filters: LeadFilters = {}) {
    const { status, search } = filters;

    const where: Prisma.LeadWhereInput = {
      ...(status && { status }),
      ...(search && {
        OR: [
          { name: { contains: search, mode: 'insensitive' } },
          { email: { contains: search, mode: 'insensitive' } },
          { phone: { contains: search, mode: 'insensitive' } },
          { message: { contains: search, mode: 'insensitive' } },
        ],
      }),
    };

    return await prisma.lead.findMany({
      where,
      include: {
        property: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  },

  async updateStatus(id: string, status: LeadStatus) {
    return await prisma.lead.update({
      where: { id },
      data: { status },
    });
  },

  async delete(id: string) {
    return await prisma.lead.delete({
      where: { id },
    });
  },

  async create(data: Prisma.LeadUncheckedCreateInput) {
    return await prisma.lead.create({
      data,
    });
  },
};
