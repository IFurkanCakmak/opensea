import sanityClient from "@sanity/client";


export const client = sanityClient({

    projectId: '8ovmh4o2',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skVmJ5n6srphCVnRDzZTRYYbRn3W06tmrWnUraRdMKzlmhnx4Ic3Ol1jEBPMgtHRNF1tGUb0RAXPMWfxYjF36tiHUWIjfha7eOUkomDm2E4KLrZ6DrAHsTL8ygw3yvZ5QfIoBRerQjiLDz3ED9gAN3H2MfVar9d2SRfTKAoRxpw14eBe46nD',
    useCdn: false,
})