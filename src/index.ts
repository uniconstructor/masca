import { VerifiableCredential } from "@veramo/core";
import { OnRpcRequestHandler } from "@metamask/snap-types";
import { togglePopups, changeInfuraToken } from "./rpc/configure";
import { getVCs } from "./rpc/getVCs";
import { getVP } from "./rpc/getVP";
import { saveVC } from "./rpc/saveVC";
import {
  isValidChangeInfuraTokenRequest,
  isValidGetVCsRequest,
  isValidGetVPRequest,
  isValidSaveVCRequest,
} from "./utils/params";

export const onRpcRequest: OnRpcRequestHandler = async ({
  origin,
  request,
}) => {
  console.log("Request:", request);
  console.log("Origin:", origin);
  console.log("-------------------------------------------------------------");
  switch (request.method) {
    case "helloWorld":
      console.log("Hello World!!!");
      return { data: "vcr" };
    case "getVCs":
      console.log("querry before");
      isValidGetVCsRequest(request.params);
      return await getVCs(request.params.querry);
    case "saveVC":
      isValidSaveVCRequest(request.params);
      return await saveVC(request.params.verifiableCredential);
    case "getVP":
      isValidGetVPRequest(request.params);
      return await getVP(
        request.params.vc_id,
        request.params.domain,
        request.params.challenge
      );
    case "changeInfuraToken":
      isValidChangeInfuraTokenRequest(request.params);
      return await changeInfuraToken(request.params.infuraToken);
    case "togglePopups":
      return await togglePopups();
    default:
      throw new Error("Method not found.");
  }
};
//);
