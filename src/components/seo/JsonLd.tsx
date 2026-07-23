interface JsonLdProps {
  data: Record<string, unknown>;
}

export const JsonLd = ({ data }: JsonLdProps) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

/* ─── Pre-built schema helpers ─── */

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nahada',
  url: 'https://nahada.ma',
  logo: 'https://nahada.ma/nahada.svg',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+212634323138',
    contactType: 'customer service',
    availableLanguage: ['Arabic', 'French'],
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'MA',
  },
};

export const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Nahada',
  url: 'https://nahada.ma',
};

export interface ProductSchemaInput {
  name: string;
  description: string;
  image: string;
  price: number;
  oldPrice?: number;
  slug: string;
  rating?: number;
  reviewCount?: number;
  inStock: boolean;
  currency?: string;
}

export const buildProductSchema = (product: ProductSchemaInput) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description,
  image: product.image,
  offers: {
    '@type': 'Offer',
    price: product.price,
    priceCurrency: product.currency || 'MAD',
    availability: product.inStock
      ? 'https://schema.org/InStock'
      : 'https://schema.org/OutOfStock',
    url: `https://nahada.ma/product/${product.slug}`,
  },
  ...(product.rating && product.reviewCount
    ? {
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: product.rating,
          reviewCount: product.reviewCount,
        },
      }
    : {}),
});

export interface FAQItem {
  question: string;
  answer: string;
}

export const buildFAQSchema = (items: FAQItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export const buildBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
