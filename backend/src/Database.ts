//Source code generated by AppGPT (www.appgpt.tech)

//Class to create tables and seed new database
import { DataSource } from 'typeorm';
import { DBConfiguration } from './Configuration';
import { SettingsEntity } from './db/Settings.entity';
//autogenerate imports based on resources
import { UsersEntity } from './db/Users.entity';
import { VendorsEntity } from './db/Vendors.entity';
import { CustomersEntity } from './db/Customers.entity';
import { InventoryEntity } from './db/Inventory.entity';
import { ProductsEntity } from './db/Products.entity';
import { ProductCategoriesEntity } from './db/ProductCategories.entity';
import { DiscountsEntity } from './db/Discounts.entity';
import { ShoppingCartEntity } from './db/ShoppingCart.entity';
import { OrdersEntity } from './db/Orders.entity';
import { OrderDetailsEntity } from './db/OrderDetails.entity';
import { PaymentsEntity } from './db/Payments.entity';
import { ReviewsEntity } from './db/Reviews.entity';
import { SupportTicketsEntity } from './db/SupportTickets.entity';

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [
      SettingsEntity,
      UsersEntity,
      VendorsEntity,
      CustomersEntity,
      InventoryEntity,
      ProductsEntity,
      ProductCategoriesEntity,
      DiscountsEntity,
      ShoppingCartEntity,
      OrdersEntity,
      OrderDetailsEntity,
      PaymentsEntity,
      ReviewsEntity,
      SupportTicketsEntity,
    ];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables

    await Database.Seed();
  }
  static async Seed() {
    let data: any = {
      Users: [
        {
          username: 'username 1',
          email: 'email 1',
          password: 'password 1',
          role: 'role 1',
          id: 37,
        },
        {
          username: 'username 2',
          email: 'email 2',
          password: 'password 2',
          role: 'role 2',
          id: 14,
        },
        {
          username: 'username 3',
          email: 'email 3',
          password: 'password 3',
          role: 'role 3',
          id: 2,
        },
        {
          username: 'username 4',
          email: 'email 4',
          password: 'password 4',
          role: 'role 4',
          id: 39,
        },
        {
          username: 'username 5',
          email: 'email 5',
          password: 'password 5',
          role: 'role 5',
          id: 23,
        },
      ],
      Vendors: [
        {
          companyName: 'companyName 1',
          contactName: 'contactName 1',
          email: 'email 1',
          password: 'password 1',
          id: 57,
        },
        {
          companyName: 'companyName 2',
          contactName: 'contactName 2',
          email: 'email 2',
          password: 'password 2',
          id: 50,
        },
        {
          companyName: 'companyName 3',
          contactName: 'contactName 3',
          email: 'email 3',
          password: 'password 3',
          id: 80,
        },
        {
          companyName: 'companyName 4',
          contactName: 'contactName 4',
          email: 'email 4',
          password: 'password 4',
          id: 17,
        },
        {
          companyName: 'companyName 5',
          contactName: 'contactName 5',
          email: 'email 5',
          password: 'password 5',
          id: 7,
        },
      ],
      Customers: [
        {
          customerName: 'customerName 1',
          email: 'email 1',
          password: 'password 1',
          billingAddress: 'billingAddress 1',
          shippingAddress: 'shippingAddress 1',
          country: 'country 1',
          phone: 'phone 1',
          id: 61,
        },
        {
          customerName: 'customerName 2',
          email: 'email 2',
          password: 'password 2',
          billingAddress: 'billingAddress 2',
          shippingAddress: 'shippingAddress 2',
          country: 'country 2',
          phone: 'phone 2',
          id: 27,
        },
        {
          customerName: 'customerName 3',
          email: 'email 3',
          password: 'password 3',
          billingAddress: 'billingAddress 3',
          shippingAddress: 'shippingAddress 3',
          country: 'country 3',
          phone: 'phone 3',
          id: 52,
        },
        {
          customerName: 'customerName 4',
          email: 'email 4',
          password: 'password 4',
          billingAddress: 'billingAddress 4',
          shippingAddress: 'shippingAddress 4',
          country: 'country 4',
          phone: 'phone 4',
          id: 33,
        },
        {
          customerName: 'customerName 5',
          email: 'email 5',
          password: 'password 5',
          billingAddress: 'billingAddress 5',
          shippingAddress: 'shippingAddress 5',
          country: 'country 5',
          phone: 'phone 5',
          id: 81,
        },
      ],
      Inventory: [
        { product: 1, quantity: 1, lowStockThreshold: 1, id: 47 },
        { product: 2, quantity: 2, lowStockThreshold: 2, id: 91 },
        { product: 3, quantity: 3, lowStockThreshold: 3, id: 10 },
        { product: 4, quantity: 4, lowStockThreshold: 4, id: 68 },
        { product: 5, quantity: 5, lowStockThreshold: 5, id: 72 },
      ],
      Products: [
        {
          productName: 'productName 1',
          vendor: 1,
          price: 0.83,
          weight: 0.44,
          description: 'description 1',
          thumbnail: 'thumbnail 1',
          image: 'image 1',
          category: 1,
          creationDate: '2024-07-25T16:58:26.891Z',
          stock: 1,
          id: 67,
        },
        {
          productName: 'productName 2',
          vendor: 2,
          price: 0.92,
          weight: 0.88,
          description: 'description 2',
          thumbnail: 'thumbnail 2',
          image: 'image 2',
          category: 2,
          creationDate: '2023-06-30T14:11:35.180Z',
          stock: 2,
          id: 18,
        },
        {
          productName: 'productName 3',
          vendor: 3,
          price: 0.81,
          weight: 0.76,
          description: 'description 3',
          thumbnail: 'thumbnail 3',
          image: 'image 3',
          category: 3,
          creationDate: '2025-03-29T09:55:38.341Z',
          stock: 3,
          id: 30,
        },
        {
          productName: 'productName 4',
          vendor: 4,
          price: 0.23,
          weight: 0.8,
          description: 'description 4',
          thumbnail: 'thumbnail 4',
          image: 'image 4',
          category: 4,
          creationDate: '2024-07-19T22:13:55.714Z',
          stock: 4,
          id: 39,
        },
        {
          productName: 'productName 5',
          vendor: 5,
          price: 0.56,
          weight: 0.46,
          description: 'description 5',
          thumbnail: 'thumbnail 5',
          image: 'image 5',
          category: 5,
          creationDate: '2024-10-07T16:14:21.042Z',
          stock: 5,
          id: 32,
        },
      ],
      ProductCategories: [
        { category: 'category 1', id: 74 },
        { category: 'category 2', id: 1 },
        { category: 'category 3', id: 36 },
        { category: 'category 4', id: 59 },
        { category: 'category 5', id: 39 },
      ],
      Discounts: [
        {
          product: 1,
          discountType: 'discountType 1',
          description: 'description 1',
          discountAmount: 0.87,
          discountPercent: 0.92,
          id: 36,
        },
        {
          product: 2,
          discountType: 'discountType 2',
          description: 'description 2',
          discountAmount: 0.13,
          discountPercent: 0.96,
          id: 8,
        },
        {
          product: 3,
          discountType: 'discountType 3',
          description: 'description 3',
          discountAmount: 0.57,
          discountPercent: 0.73,
          id: 30,
        },
        {
          product: 4,
          discountType: 'discountType 4',
          description: 'description 4',
          discountAmount: 0.96,
          discountPercent: 0.78,
          id: 83,
        },
        {
          product: 5,
          discountType: 'discountType 5',
          description: 'description 5',
          discountAmount: 0.24,
          discountPercent: 0.19,
          id: 53,
        },
      ],
      ShoppingCart: [
        { customer: 1, product: 1, priceAtPurchase: 0.76, quantity: 1, id: 73 },
        { customer: 2, product: 2, priceAtPurchase: 0.2, quantity: 2, id: 62 },
        { customer: 3, product: 3, priceAtPurchase: 0.46, quantity: 3, id: 52 },
        { customer: 4, product: 4, priceAtPurchase: 0.36, quantity: 4, id: 68 },
        { customer: 5, product: 5, priceAtPurchase: 0.22, quantity: 5, id: 26 },
      ],
      Orders: [
        {
          orderNumber: 'orderNumber 1',
          customer: 1,
          totalAmount: 1,
          vat: 0.61,
          totalAmountWithVat: 0.55,
          shippingCost: 0.17,
          shippingAddress: 'shippingAddress 1',
          orderAddress: 'orderAddress 1',
          orderEmail: 'orderEmail 1',
          orderDate: '2024-03-15T08:19:53.543Z',
          orderStatus: 'orderStatus 1',
          trackingNo: 'trackingNo 1',
          id: 79,
        },
        {
          orderNumber: 'orderNumber 2',
          customer: 2,
          totalAmount: 0.76,
          vat: 0.12,
          totalAmountWithVat: 0.71,
          shippingCost: 0.13,
          shippingAddress: 'shippingAddress 2',
          orderAddress: 'orderAddress 2',
          orderEmail: 'orderEmail 2',
          orderDate: '2024-05-31T11:38:08.602Z',
          orderStatus: 'orderStatus 2',
          trackingNo: 'trackingNo 2',
          id: 59,
        },
        {
          orderNumber: 'orderNumber 3',
          customer: 3,
          totalAmount: 0.65,
          vat: 0.12,
          totalAmountWithVat: 0.46,
          shippingCost: 0.33,
          shippingAddress: 'shippingAddress 3',
          orderAddress: 'orderAddress 3',
          orderEmail: 'orderEmail 3',
          orderDate: '2023-09-09T16:48:53.291Z',
          orderStatus: 'orderStatus 3',
          trackingNo: 'trackingNo 3',
          id: 97,
        },
        {
          orderNumber: 'orderNumber 4',
          customer: 4,
          totalAmount: 0.43,
          vat: 0.08,
          totalAmountWithVat: 0.32,
          shippingCost: 0.41,
          shippingAddress: 'shippingAddress 4',
          orderAddress: 'orderAddress 4',
          orderEmail: 'orderEmail 4',
          orderDate: '2025-01-09T12:28:59.766Z',
          orderStatus: 'orderStatus 4',
          trackingNo: 'trackingNo 4',
          id: 88,
        },
        {
          orderNumber: 'orderNumber 5',
          customer: 5,
          totalAmount: 0.18,
          vat: 0.84,
          totalAmountWithVat: 0.28,
          shippingCost: 0.28,
          shippingAddress: 'shippingAddress 5',
          orderAddress: 'orderAddress 5',
          orderEmail: 'orderEmail 5',
          orderDate: '2023-08-08T06:21:08.271Z',
          orderStatus: 'orderStatus 5',
          trackingNo: 'trackingNo 5',
          id: 89,
        },
      ],
      OrderDetails: [
        {
          orderNumber: 1,
          line: 1,
          product: 1,
          price: 0.62,
          quantity: 1,
          id: 43,
        },
        {
          orderNumber: 2,
          line: 2,
          product: 2,
          price: 0.4,
          quantity: 2,
          id: 56,
        },
        {
          orderNumber: 3,
          line: 3,
          product: 3,
          price: 0.3,
          quantity: 3,
          id: 29,
        },
        {
          orderNumber: 4,
          line: 4,
          product: 4,
          price: 0.88,
          quantity: 4,
          id: 15,
        },
        {
          orderNumber: 5,
          line: 5,
          product: 5,
          price: 0.08,
          quantity: 5,
          id: 99,
        },
      ],
      Payments: [
        {
          orderNumber: 1,
          amount: 0.88,
          paymentMethod: 'paymentMethod 1',
          paymentDate: '2024-03-12T02:38:13.513Z',
          paymentStatus: 'paymentStatus 1',
          id: 48,
        },
        {
          orderNumber: 2,
          amount: 0.68,
          paymentMethod: 'paymentMethod 2',
          paymentDate: '2023-08-26T14:15:00.815Z',
          paymentStatus: 'paymentStatus 2',
          id: 43,
        },
        {
          orderNumber: 3,
          amount: 0.69,
          paymentMethod: 'paymentMethod 3',
          paymentDate: '2024-07-03T04:14:15.160Z',
          paymentStatus: 'paymentStatus 3',
          id: 81,
        },
        {
          orderNumber: 4,
          amount: 0.26,
          paymentMethod: 'paymentMethod 4',
          paymentDate: '2024-07-11T22:51:42.591Z',
          paymentStatus: 'paymentStatus 4',
          id: 58,
        },
        {
          orderNumber: 5,
          amount: 0.6,
          paymentMethod: 'paymentMethod 5',
          paymentDate: '2023-12-04T03:40:56.767Z',
          paymentStatus: 'paymentStatus 5',
          id: 50,
        },
      ],
      Reviews: [
        {
          product: 1,
          customer: 1,
          vendor: 1,
          rating: 1,
          reviewDetails: 'reviewDetails 1',
          date: '2025-01-18T09:45:24.551Z',
          id: 62,
        },
        {
          product: 2,
          customer: 2,
          vendor: 2,
          rating: 2,
          reviewDetails: 'reviewDetails 2',
          date: '2025-01-11T21:05:23.104Z',
          id: 1,
        },
        {
          product: 3,
          customer: 3,
          vendor: 3,
          rating: 3,
          reviewDetails: 'reviewDetails 3',
          date: '2024-11-08T19:26:29.724Z',
          id: 89,
        },
        {
          product: 4,
          customer: 4,
          vendor: 4,
          rating: 4,
          reviewDetails: 'reviewDetails 4',
          date: '2025-02-10T09:27:42.724Z',
          id: 85,
        },
        {
          product: 5,
          customer: 5,
          vendor: 5,
          rating: 5,
          reviewDetails: 'reviewDetails 5',
          date: '2023-10-28T21:28:58.807Z',
          id: 47,
        },
      ],
      SupportTickets: [
        {
          user: 1,
          customer: 1,
          description: 'description 1',
          status: 'status 1',
          creationDate: '2024-11-26T00:28:57.456Z',
          resolutionDate: '2024-05-26T22:41:02.231Z',
          id: 66,
        },
        {
          user: 2,
          customer: 2,
          description: 'description 2',
          status: 'status 2',
          creationDate: '2023-10-10T08:41:06.118Z',
          resolutionDate: '2024-01-26T22:29:57.717Z',
          id: 31,
        },
        {
          user: 3,
          customer: 3,
          description: 'description 3',
          status: 'status 3',
          creationDate: '2024-08-19T22:28:08.580Z',
          resolutionDate: '2023-11-27T13:37:57.001Z',
          id: 96,
        },
        {
          user: 4,
          customer: 4,
          description: 'description 4',
          status: 'status 4',
          creationDate: '2023-08-25T12:37:05.792Z',
          resolutionDate: '2024-02-04T21:49:15.842Z',
          id: 91,
        },
        {
          user: 5,
          customer: 5,
          description: 'description 5',
          status: 'status 5',
          creationDate: '2023-10-22T08:42:07.691Z',
          resolutionDate: '2023-08-19T00:53:12.798Z',
          id: 8,
        },
      ],
    };
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true) {
      console.log('   Seeding database...');
      await this.SeedResource('UsersEntity', data.Users);
      await this.SeedResource('VendorsEntity', data.Vendors);
      await this.SeedResource('CustomersEntity', data.Customers);
      await this.SeedResource('InventoryEntity', data.Inventory);
      await this.SeedResource('ProductsEntity', data.Products);
      await this.SeedResource(
        'ProductCategoriesEntity',
        data.ProductCategories,
      );
      await this.SeedResource('DiscountsEntity', data.Discounts);
      await this.SeedResource('ShoppingCartEntity', data.ShoppingCart);
      await this.SeedResource('OrdersEntity', data.Orders);
      await this.SeedResource('OrderDetailsEntity', data.OrderDetails);
      await this.SeedResource('PaymentsEntity', data.Payments);
      await this.SeedResource('ReviewsEntity', data.Reviews);
      await this.SeedResource('SupportTicketsEntity', data.SupportTickets);
      await this.SeedResource('SettingsEntity', {
        settingname: 'isSeeded',
        settingvalue: 'true',
      });
    } else {
      console.log('   Database seeded already!');
    }
  }
  static async IsSeeded() {
    const repo = Database.ds.getRepository('SettingsEntity');
    let rec: any = await repo.findOne({
      select: {
        settingname: true,
        settingvalue: true,
      },
      where: {
        settingname: 'isSeeded',
      },
    });
    if (rec && rec.settingvalue) return true;
    return false;
  }
  static async SeedResource(resourceName: any, resourceData: any) {
    const repo = Database.ds.getRepository(resourceName);
    //await repo.clear();
    console.log('   Seeding table ' + resourceName);
    await repo.upsert(resourceData, ['id']);
  }
}
