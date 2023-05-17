import { ProductCategory } from 'src/apis/productsCategories/entities/productCategory.entity';
import { ProductSaleslocation } from 'src/apis/productsSaleslocaltions/entities/productSaleslocation.entity';
import { ProductTag } from 'src/apis/productsTags/entities/productTag.entity';
import { User } from 'src/apis/users/entities/user.entity';
export declare class Product {
    id: string;
    name: string;
    description: string;
    price: number;
    isSoldout: boolean;
    productSaleslocation: ProductSaleslocation;
    prodcutCategory: ProductCategory;
    user: User;
    productTags: ProductTag[];
}
