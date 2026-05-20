---
name: infrastructure-data-schema-design
description: Database architecture and infrastructure setup for the Alwalaa Oman real estate platform.
date: 2026-05-21
status: proposed
---

# Infrastructure & Data Schema Design

## 1. Objective
Establish a premium, scalable, and investor-focused data foundation for the Alwalaa Oman real estate platform. The system must transition from a static showcase to a dynamic platform capable of handling complex property listings, agent management, and investment analytics.

## 2. Tech Stack
- **Database**: Supabase (PostgreSQL)
- **ORM**: Prisma
- **Language**: TypeScript
- **Authentication**: Supabase Auth / NextAuth (to be detailed in Sub-project 3)

## 3. Database Schema (Relational Model)

### 3.1 `communities`
Stores luxury developments and their general metadata.
| Field | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK, Default: gen_random_uuid() | Unique identifier |
| `slug` | String | Unique, Indexed | URL-friendly identifier (e.g., `sultan-haitham-city`) |
| `name` | String | Not Null | Name of the community |
| `description` | Text | - | Detailed community description |
| `location` | String | Not Null | General location/area |
| `image_url` | String | - | Main cover image for the community |
| `featured` | Boolean | Default: false | Whether to highlight this community |
| `metadata` | JSONB | - | Flexible storage for community highlights |
| `created_at` | Timestamp | Default: now() | Record creation time |

### 3.2 `agents`
Professional profiles for real estate agents.
| Field | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK, Default: gen_random_uuid() | Unique identifier |
| `user_id` | UUID | Unique, FK (`auth.users`) | Link to Supabase Auth system |
| `full_name` | String | Not Null | Agent's full name |
| `email` | String | Unique, Not Null | Professional email address |
| `phone` | String | Not Null | Contact phone number |
| `bio` | Text | - | Professional biography |
| `avatar_url` | String | - | Profile picture URL |
| `role` | Enum | `AGENT`, `ADMIN` | Access level |
| `is_active` | Boolean | Default: true | Status of the agent account |
| `created_at` | Timestamp | Default: now() | Record creation time |

### 3.3 `properties`
The core real estate listing data.
| Field | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK, Default: gen_random_uuid() | Unique identifier |
| `slug` | String | Unique, Indexed | URL-friendly identifier |
| `title` | String | Not Null | Property name/title |
| `description` | Text | Not Null | Detailed property description |
| `type` | Enum | `APARTMENT`, `VILLA`, `TOWNHOUSE`, `LAND` | Property category |
| `status` | Enum | `FOR_SALE`, `FOR_RENT`, `SOLD`, `RENTED` | Market status |
| `community_id` | UUID | FK (`communities.id`) | Association with a community |
| `agent_id` | UUID | FK (`agents.id`) | Assigned agent |
| `price` | Decimal | Not Null | Listing price |
| `currency` | String | Default: `OMR` | Currency code |
| `bedrooms` | Integer | - | Number of bedrooms |
| `bathrooms` | Integer | - | Number of bathrooms |
| `area_sqm` | Decimal | - | Total area in square meters |
| `gallery` | Text[] | - | Ordered array of high-res image URLs |
| `amenities` | Text[] | - | List of amenities (e.g., Pool, Gym) |
| `coordinates` | JSONB | - | GeoJSON or simple {lat, lng} for maps |
| `featured` | Boolean | Default: false | Highlighted property |
| `created_at` | Timestamp | Default: now() | Record creation time |
| `updated_at` | Timestamp | Default: now() | Last modification time |

### 3.4 `investment_metrics`
Premium data layer for investor analytics.
| Field | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK, Default: gen_random_uuid() | Unique identifier |
| `property_id` | UUID | Unique, FK (`properties.id`) | One-to-one link to property |
| `expected_rental_yield` | Decimal | - | Projected annual rental yield % |
| `roi_projection` | Decimal | - | Projected Return on Investment % |
| `payment_plan_details` | Text | - | Detailed payment milestones |
| `investment_grade` | Enum | `A`, `B`, `C` | Investment quality rating |
| `last_updated` | Timestamp | Default: now() | When the metrics were last calculated |

## 4. Data Flow & Integration

### 4.1 Read Strategy
- **Public Access**: All properties and communities will be accessible via public APIs/Server Components for SEO and fast loading.
- **Caching**: Use Next.js `revalidatePath` and `revalidateTag` to keep the cinematic gallery and price updates current.

### 4.2 Write Strategy
- **Administrative Actions**: Performed via Next.js Server Actions using the `SUPABASE_SERVICE_ROLE_KEY` for bypass of RLS during migrations or admin overrides.
- **Agent Actions**: Restricted to their own property assignments using Supabase RLS policies.

## 5. Security Model
- **RLS (Row Level Security)**:
    - `communities`: `SELECT` (Public), `ALL` (Admin)
    - `properties`: `SELECT` (Public), `UPDATE/INSERT` (Agent/Admin)
    - `agents`: `SELECT` (Public), `UPDATE` (Self/Admin)
    - `investment_metrics`: `SELECT` (Public/Premium), `UPDATE` (Admin)

## 6. Success Criteria
- [ ] Prisma schema successfully pushed to Supabase.
- [ ] All foreign key relationships functional.
- [ ] TypeScript types generated and aligned with the database.
- [ ] Database responds within <100ms for standard property queries.
