import { toast } from "sonner";

const handleMutation = async (
  data: any,
  mutationFunc: any,
  loadingTxt: string,
  onSuccess?: any,
  onFailure?: any
) => {
  const loadingToast = toast.loading(loadingTxt);
  try {
    const res = await mutationFunc(data).unwrap();
    console.log("res, ", res);
    toast.success(res.message || "Success!", { id: loadingToast });
    if (res.success) {
      onSuccess(res);
    } else {
      onFailure(res);
    }
  } catch (error: any) {
    toast.error(error.data.message || "Something went wrong!", {
      id: loadingToast,
    });
    console.log("error, ", error);
  }
};

export default handleMutation;
