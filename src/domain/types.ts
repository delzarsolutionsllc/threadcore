export type AssetStatus = 'draft' | 'approved' | 'held' | 'rejected';
export type RiskLevel = 'low' | 'review' | 'high';

export interface DesignAsset {
  id: string;
  name: string;
  description: string;
  source: 'original' | 'licensed' | 'user-upload';
  status: AssetStatus;
  risk: RiskLevel;
  rightsEvidence?: string;
  createdAt: string;
}

export interface ProductVariant {
  sku: string;
  title: string;
  baseCostCents: number;
  fulfillmentShippingCents: number;
  retailPriceCents: number;
  platformFeeBps: number;
}

export interface MarginResult {
  revenueCents: number;
  costsCents: number;
  profitCents: number;
  marginBps: number;
}

export interface FulfillmentOrder {
  externalOrderId: string;
  sku: string;
  quantity: number;
  shippingAddress: {
    name: string;
    line1: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
}

export interface FulfillmentAdapter {
  readonly provider: string;
  createOrder(order: FulfillmentOrder): Promise<{ providerOrderId: string; status: string }>;
  getOrder(providerOrderId: string): Promise<{ status: string; trackingNumber?: string }>;
}
