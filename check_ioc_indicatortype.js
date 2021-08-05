function check_ioc_indicatortype(val) {
            
            const regex_ipv4 =
                /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
            const regex_ipv6 =
                /^((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*::((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*|((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4})){7}$/
            const regex_url =
                /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
            const regex_domain = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/
            const regex_sha1 = /^[a-f0-9]{40}$/gi
            const regex_sha256 = /^[a-f0-9]{64}$/gi


            if (regex_ipv4.test(arguments[0]) || regex_ipv6.test(arguments[0])) {
                return "IpAddress"
            } else if (regex_url.test(arguments[0])) {
                return "Url"
            } else if (regex_sha256.test(arguments[0])) {
                return "FileSha256"
            } else if (regex_domain.test(arguments[0])) {
                return "DomainName"
            } else if (regex_sha1.test(arguments[0])) {
                return "FileSha1"
            } else {
                return "Unknown"
            }
}
