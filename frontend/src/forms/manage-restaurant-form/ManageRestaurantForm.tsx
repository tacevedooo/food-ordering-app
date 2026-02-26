import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import { Separator } from "@/components/ui/separator";
import CuisinesSection from "./CuisineSection";
import MenuSection from "./MenuSection";
import ImageSection from "./ImageSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { type Restaurant } from "@/types";
import { useEffect } from "react";

const formSchema = z.object({
  restaurantName: z.string().min(1, "restaurant name is required"),
  city: z.string().min(1, "city is required"),
  country: z.string().min(1, "country is required"),
  deliveryPrice: z.coerce.number().min(0, "delivery price is required"),
  estimatedDeliveryTime: z.coerce.number().min(1, "estimated delivery time is required"),
  cuisines: z.array(z.string()).min(1, "please select at least one item"),
  menuItems: z.array(
    z.object({
      name: z.string().min(1, "name is required"),
      price: z.coerce.number().min(1, "price is required"),
    })
  ),
  imageUrl: z.string().optional(),
  imageFile: z.instanceof(File).optional(),
}).refine(
  (data) => data.imageUrl || data.imageFile,
  {
    message: "Either image URL or image File must be provided",
    path: ["imageFile"],
  }
);

// ✅ TYPE
export type RestaurantFormData = z.infer<typeof formSchema>;

type Props = {
  restaurant?: Restaurant;
  onSave: (restaurantFormData: FormData) => void;
  isLoading: boolean;
};

const ManageRestaurantForm = ({ onSave, isLoading, restaurant }: Props) => {

  // ✅ FIX: usar solo el tipo de OUTPUT (z.infer) sin el tercer type param
  const form = useForm<RestaurantFormData>({
    resolver: zodResolver(formSchema) as never,
    defaultValues: {
      cuisines: [],
      menuItems: [{ name: "", price: 0 }],
    },
  });

  useEffect(() => {
    if (!restaurant) return;

    const deliveryPriceFormatted = Math.round(restaurant.deliveryPrice / 100);

    const menuItemsFormatted = restaurant.menuItems.map((item) => ({
      ...item,
      price: Math.round(item.price / 100),
    }));

    form.reset({
      ...restaurant,
      deliveryPrice: deliveryPriceFormatted,
      menuItems: menuItemsFormatted,
    });
  }, [form, restaurant]);

  const onSubmit: SubmitHandler<RestaurantFormData> = (formDataJson) => {
    const formData = new FormData();

    formData.append("restaurantName", formDataJson.restaurantName);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);
    formData.append("deliveryPrice", (formDataJson.deliveryPrice * 100).toString());
    formData.append("estimatedDeliveryTime", formDataJson.estimatedDeliveryTime.toString());

    formDataJson.cuisines.forEach((cuisine, index) => {
      formData.append(`cuisines[${index}]`, cuisine);
    });

    formDataJson.menuItems.forEach((menuItem, index) => {
      formData.append(`menuItems[${index}][name]`, menuItem.name);
      formData.append(`menuItems[${index}][price]`, (menuItem.price * 100).toString());
    });

    if (formDataJson.imageFile) {
      formData.append("imageFile", formDataJson.imageFile);
    }

    onSave(formData);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-gray-50 p-10 rounded-lg"
      >
        <DetailsSection />
        <Separator />
        <CuisinesSection />
        <Separator />
        <MenuSection />
        <Separator />
        <ImageSection />

        {isLoading ? <LoadingButton /> : <Button type="submit">Submit</Button>}
      </form>
    </Form>
  );
};

export default ManageRestaurantForm;