import { prisma } from "@/lib/prisma";
import { Prisma, Property, PropertyType, PropertyStatus } from "@prisma/client";

export interface PropertyFilters {
  type?: PropertyType;
  status?: PropertyStatus;
  communityId?: string;
  communitySlug?: string;
  featured?: boolean;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
}

export const propertyService = {
  async getAll(filters: PropertyFilters = {}) {
    const { type, status, communityId, communitySlug, featured, minPrice, maxPrice, search } = filters;

    const where: Prisma.PropertyWhereInput = {
      ...(type && { type }),
      ...(status && { status }),
      ...(communityId && { communityId }),
      ...(communitySlug && { community: { slug: communitySlug } }),
      ...(featured !== undefined && { featured }),
      ...(minPrice || maxPrice) && {
        price: {
          ...(minPrice && { gte: minPrice }),
          ...(maxPrice && { lte: maxPrice }),
        },
      },
      ...(search && {
        OR: [
          { title: { contains: search, mode: 'insensitive' } },
          { description: { contains: search, mode: 'insensitive' } },
        ],
      }),
    };

    return await prisma.property.findMany({
      where,
      include: {
        community: true,
        agent: true,
        metrics: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  },

  async getById(id: string) {
    return await prisma.property.findUnique({
      where: { id },
      include: {
        community: true,
        agent: true,
        metrics: true,
      },
    });
  },

  async create(data: Prisma.PropertyUncheckedCreateInput) {
    return await prisma.property.create({
      data,
    });
  },

  async update(id: string, data: Prisma.PropertyUpdateInput) {
    return await prisma.property.update({
      where: { id },
      data,
    });
  },

  async delete(id: string) {
    return await prisma.property.delete({
      where: { id },
    });
  },

  async duplicate(id: string) {
    const original = await this.getById(id);
    if (!original) throw new Error("Property not found");

    const { id: _id, createdAt: _createdAt, updatedAt: _updatedAt, community: _community, agent: _agent, metrics: _metrics, coordinates, ...rest } = original;

    return await prisma.property.create({
      data: {
        ...rest,
        coordinates: coordinates as any,
        slug: `${rest.slug}-copy-${Date.now()}`,
        communityId: original.communityId,
        agentId: original.agentId,
      },
    });
  },
};
